export default class GameSaving {
  constructor(data) {
    const parsedData = JSON.parse(data);
    this.id = parsedData.id;
    this.created = parsedData.created;
    this.userInfo = {
      id: parsedData.userInfo.id,
      name: parsedData.userInfo.name,
      level: parsedData.userInfo.level,
      points: parsedData.userInfo.points,
    };
  }
}
