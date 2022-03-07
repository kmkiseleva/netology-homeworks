import Validator from '../app';

const example = new Validator();

test.each(['John', 'Mi-ke', 'S5Sam', 'Carl_P', 'Den35V', 'Jake-5Morrison'])(
  'Validation of the name',
  (item) => {
    expect(example.validateUsername(item)).toBeTruthy();
  },
);

test.each(['-hhfhf', '_ghghg', '5ghg', 'fbhff-', 'fhfhf_', 'fjf7', 'h7777f'])(
  "Username shouldn't have more than 3 digits, begin and end with -, _ or digits",
  (item) => {
    expect(() => example.validateUsername(item)).toThrow();
  },
);
