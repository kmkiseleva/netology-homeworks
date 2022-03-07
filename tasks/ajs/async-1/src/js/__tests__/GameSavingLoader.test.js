import GameSavingLoader from '../GameSavingLoader';

test('The Method catches an error', async () => {
  try {
    await GameSavingLoader.load();
  } catch (error) {
    expect(error).toBe('Error with data');
  }
});
