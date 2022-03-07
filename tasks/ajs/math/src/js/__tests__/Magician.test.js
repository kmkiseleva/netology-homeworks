import Magician from '../Magician';

test('Creating the character Magician', () => {
  const magician = {
    name: 'Mark',
    type: 'Magician',
    health: 100,
    level: 1,
    defence: 40,
    datura: false,
    mainAttack: 10,
    distance: 1,
  };

  expect(new Magician('Mark')).toEqual(magician);
});

test("Method 'get attack' is calculating correctly", () => {
  const magician = new Magician('Mark');
  magician.attack = 100;
  magician.distance = 2;
  magician.stoned = true;
  expect(magician.attack).toBe(85);
});

test("Method 'get attack' set attack to null when it's negative", () => {
  const magician = new Magician('Mark');
  magician.attack = 10;
  magician.distance = 5;
  magician.stoned = true;
  expect(magician.attack).toBe(0);
});
