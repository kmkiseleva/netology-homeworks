import GameSavingLoader from './GameSavingLoader';
import GameSaving from './GameSaving';

GameSavingLoader.load().then(
  (saving) => new GameSaving(saving),
  (error) => {
    throw new Error(error);
  },
);
