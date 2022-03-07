export default class Team {
  constructor() {
    this.team = [
      {
        name: 'John',
        type: 'Bowman',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10,
      },
      {
        name: 'Mark',
        type: 'Daemon',
        health: 70,
        level: 2,
        attack: 50,
        defence: 20,
      },
      {
        name: 'Genry',
        type: 'Swordsman',
        health: 80,
        level: 3,
        attack: 60,
        defence: 15,
      },
    ];
  }

  * [Symbol.iterator]() {
    const { team } = this;
    const last = team.length;
    for (let i = 0; i < last; i += 1) {
      yield team[i];
    }
  }
}
