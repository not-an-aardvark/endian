# endian

Gets the system's endianness. Also works in browsers.

```js
var endianness = require('endian');
console.log(endianness);
// => 'LE'
```

In node, this exports the string `LE` if the system is little-endian, or the string `BE` if the system is big-endian.

In browsers, this adds an `endianness` property to `window`, with a value of either `LE` or `BE`.
