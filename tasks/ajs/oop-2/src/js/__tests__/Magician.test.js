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

test('LevelUp if health is zero', () => {
  const magician = new Magician('John');
  magician.health = 0;
  expect(() => magician.levelUp()).toThrowError('The player has already died!');
});

test('LevelUp makes level+1, attack and defence +20%', () => {
  const magician = new Magician('John');
  magician.levelUp();
  const uppedMagician = {
    name: 'John',
    type: 'Magician',
    health: 100,
    level: 2,
    attack: 12,
    defence: 48,
  };

  expect(magician).toEqual(uppedMagician);
});

test('Damage is calculating correctly', () => {
  const magician = new Magician('John');
  magician.damage(50);
  expect(magician.health).toEqual(70);
});

test("Damage equates health to zero when it's < 0", () => {
  const magician = new Magician('John');
  magician.health = -30;
  magician.damage(200);
  expect(magician.health).toEqual(0);
});
