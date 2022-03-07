import Swordsman from '../Swordsman';

test('Creating the character Swordsman', () => {
  const swordsman = {
    name: 'John',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect(new Swordsman('John')).toEqual(swordsman);
});
