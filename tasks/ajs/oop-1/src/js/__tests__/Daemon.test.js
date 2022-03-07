import Daemon from '../Daemon';

test('Creating the character Daemon', () => {
  const daemon = {
    name: 'John',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(new Daemon('John')).toEqual(daemon);
});
