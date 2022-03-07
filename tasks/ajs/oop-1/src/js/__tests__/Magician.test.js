import Magician from '../Magician';

test('Creating the character Magician', () => {
  const magician = {
    name: 'John',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(new Magician('John')).toEqual(magician);
});
