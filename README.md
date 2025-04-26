# Hot reloading

Minimal snippet showing how to implement hot reloading in Node.JS.

If you change the file `logic.js` and save it, the changes will be reflected in the output of `index.js` without restarting the process.

## Usage

Run

```
node index.js
```

Output:

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
