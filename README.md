# Hot reloading

Minimal snippet showing how to implement hot reloading in Node.JS.

If you change the file `logic.js` and save it, the changes will be reflected in the output of `index.js` without restarting the process.

## Usage

### TS

Install dependencies:

```
npm i
```

Run:

```
npx tsx ts/index.ts
```

### JS

Run

```
node js/index.js
```

## Output:

```javascript
foo 0
foo 1
foo 2
foo 3
foo 4
foo 5
// If you change logic.js here
bar 6
bar 7
bar 8
```
