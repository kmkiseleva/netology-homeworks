export default class ArrayBufferConverter {
  constructor() {
    this.arrayBuffer = null;
  }

  load(buffer) {
    this.arrayBuffer = new Uint16Array(buffer);
  }

  toString() {
    return [...this.arrayBuffer]
      .map((item) => String.fromCharCode(item))
      .join('');
  }
}
