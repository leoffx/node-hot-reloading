import fs from "fs";
import path from "path";

async function init() {
  function getLogicModule() {
    return import(`./logic?bust=${Date.now()}`);
  }

  let logicModule = await getLogicModule();
  const logicFilePath = path.resolve("./ts/logic.ts");
  fs.watch(logicFilePath, async (eventType) => {
    if (eventType === "change") {
      try {
        logicModule = await getLogicModule();
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
