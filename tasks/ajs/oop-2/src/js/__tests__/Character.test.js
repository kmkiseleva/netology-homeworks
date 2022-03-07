import Character from '../Character';

test('Creating the Character', () => {
  const character = {
    name: 'John',
    type: 'Magician',
    health: 100,
    level: 1,
  };

  expect(new Character('John', 'Magician')).toEqual(character);
});

test('Too small name', () => {
  expect(() => new Character('J', 'Zombie')).toThrow();
});

test('Too large name', () => {
  expect(() => new Character('Somelargename', 'Zombie')).toThrow();
});

test('Incorrect type', () => {
  expect(() => new Character('John', 'CrazyMan')).toThrow();
});
