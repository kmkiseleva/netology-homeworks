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

  [Symbol.iterator]() {
    const { team } = this;
    let currentCharIndex = 0;
    const lastCharIndex = team.length - 1;

    /* eslint-disable no-return-assign */
    return {
      next() {
        const step = {
          done: currentCharIndex > lastCharIndex,
          value: team[currentCharIndex],
        };
        currentCharIndex += 1;
        return step;
      },
    };
    /* eslint-disable no-return-assign */
  }
}
