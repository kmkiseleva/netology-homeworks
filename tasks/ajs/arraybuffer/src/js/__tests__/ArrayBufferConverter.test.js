import getBuffer from '../getBuffer';
import ArrayBufferConverter from '../ArrayBufferConverter';

test("Method 'load' saves buffer", () => {
  const example = new ArrayBufferConverter();
  example.load(getBuffer());
  expect(example.arrayBuffer).toBeInstanceOf(Uint16Array);
});

test("Method 'toString' converts data to string", () => {
  const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  const example = new ArrayBufferConverter();
  example.load(getBuffer());
  expect(example.toString()).toBe(expected);
});
