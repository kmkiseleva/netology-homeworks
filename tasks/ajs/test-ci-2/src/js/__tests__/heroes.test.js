import sortByHealth from '../heroes';

test('Testing result', () => {
  const initialArray = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const sortedArray = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  expect(sortByHealth(initialArray)).not.toBe(sortedArray);
  expect(sortByHealth(initialArray)).toEqual(sortedArray);
});
