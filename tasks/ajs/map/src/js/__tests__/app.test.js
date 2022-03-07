import ErrorRepository from '../app';

test("Method 'translate' has to return error's text", () => {
  const rep = new ErrorRepository();
  rep.errors.set('401', 'Unauthorized');
  expect(rep.translate(401)).toEqual('Unauthorized');
});

test("Method 'translate' has to return 'Unknown error' if there is no such code", () => {
  const rep = new ErrorRepository();
  expect(rep.translate(402)).toEqual('Unknown error');
});
