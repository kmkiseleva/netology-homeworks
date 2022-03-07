import health from '../health';

test('Health is more than 50', () => {
  expect(health({ name: 'Маг', health: 90 })).toBe('healthy');
});
test(
  'Health is more than 15 and less than 50'
    || 'Health is equal to 50'
    || 'Health is equal to 15',
  () => {
    expect(health({ name: 'Маг', health: 35 })).toBe('wounded');
  },
);
test('Health is less than 15', () => {
  expect(health({ name: 'Маг', health: 5 })).toBe('critical');
});
