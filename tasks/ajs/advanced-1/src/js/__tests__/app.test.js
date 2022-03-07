import orderByProps from '../app';

const hero = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

const propsForOrder = ['name', 'level'];

const expectedArray = [
  { key: 'name', value: 'мечник' },
  { key: 'level', value: 2 },
  { key: 'attack', value: 80 },
  { key: 'defence', value: 40 },
  { key: 'health', value: 10 },
];

test('Function is working correctly', () => {
  expect(orderByProps(hero, propsForOrder)).toEqual(expectedArray);
});
