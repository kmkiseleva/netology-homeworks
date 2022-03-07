import Zombie from '../Zombie';

test('Creating the character Zombie', () => {
  const zombie = {
    name: 'John',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect(new Zombie('John')).toEqual(zombie);
});
