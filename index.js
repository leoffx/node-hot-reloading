const fs = require("fs");
const path = require("path");

function init() {
  function getLogicModule() {
    delete require.cache[require.resolve("./logic")];
    return require("./logic");
  }

  let logicModule = getLogicModule();
  const logicFilePath = path.resolve("./logic.js");
  fs.watch(logicFilePath, (eventType) => {
    if (eventType === "change") {
      try {
        logicModule = getLogicModule();
      } catch (error) {
        console.error("Error reloading module:", error);
      }
    }
  });

  let count = 0;
  setInterval(async () => {
    count = await logicModule.processCount(count);
  }, 1000);
}

init();
