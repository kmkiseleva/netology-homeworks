import phoneValidator from '../app';

test('Correct validation', () => {
  expect(phoneValidator('8 (927) 000-00-00')).toEqual('+79270000000');
});

test('Correct validation', () => {
  expect(phoneValidator('+7 960 000 00 00')).toEqual('+79600000000');
});

test('Correct validation', () => {
  expect(phoneValidator('+86 000 000 0000')).toEqual('+860000000000');
});
