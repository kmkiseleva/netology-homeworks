import Daemon from '../Daemon';

test('Creating the character Daemon', () => {
  const daemon = {
    name: 'Mark',
    type: 'Daemon',
    health: 100,
    level: 1,
    defence: 40,
    datura: false,
    mainAttack: 10,
    distance: 1,
  };

  expect(new Daemon('Mark')).toEqual(daemon);
});

test("Method 'get attack' is calculating correctly", () => {
  const daemon = new Daemon('Mark');
  daemon.attack = 100;
  daemon.distance = 2;
  daemon.stoned = true;
  expect(daemon.attack).toBe(85);
});

test("Method 'get attack' set attack to null when it's negative", () => {
  const daemon = new Daemon('Mark');
  daemon.attack = 10;
  daemon.distance = 5;
  daemon.stoned = true;
  expect(daemon.attack).toBe(0);
});
