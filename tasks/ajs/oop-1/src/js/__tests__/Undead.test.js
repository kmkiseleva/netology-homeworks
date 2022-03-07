import Undead from '../Undead';

test('Creating the character Undead', () => {
  const undead = {
    name: 'John',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(new Undead('John')).toEqual(undead);
});
