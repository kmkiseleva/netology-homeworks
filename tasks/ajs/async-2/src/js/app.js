import GameSavingLoader from "./GameSavingLoader";
import GameSaving from "./GameSaving";

(async () => {
  try {
    const value = await GameSavingLoader.load();
    return await new GameSaving(value);
  } catch (error) {
    throw new Error(error);
  }
})();
