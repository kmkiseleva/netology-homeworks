import Character from '../Character';

test('Creating the Character', () => {
  const character = {
    name: 'John',
    type: 'Daemon',
    health: 100,
    level: 1,
  };

  expect(new Character('John', 'Daemon')).toEqual(character);
});

test('Too small name', () => {
  expect(() => new Character('J', 'Daemon')).toThrow();
});

test('Too large name', () => {
  expect(() => new Character('Somelargename', 'Daemon')).toThrow();
});

test('Incorrect type', () => {
  expect(() => new Character('John', 'CrazyMan')).toThrow();
});
