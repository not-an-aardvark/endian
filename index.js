(function () {
  var sixteenBit = new Uint16Array([0x00ff]);
  var eightBit = new Uint8Array(sixteenBit.buffer);
  var endianness = eightBit[0] ? 'LE' : 'BE';
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = endianness;
  } else {
    this.endianness = endianness;
  }
}());
