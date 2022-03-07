import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static async load() {
    try {
      const data = await read();
      const value = await json(data);
      return value;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
