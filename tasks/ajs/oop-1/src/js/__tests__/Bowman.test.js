import Bowman from '../Bowman';

test('Creating the character Bowman', () => {
  const bowman = {
    name: 'John',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(new Bowman('John')).toEqual(bowman);
});
