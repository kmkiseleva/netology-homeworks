export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(obj) {
    if (this.members.has(obj)) {
      throw new Error('This hero already exists!');
    }

    this.members.add(obj);
  }

  addAll(...heroes) {
    heroes.forEach((hero) => {
      if (this.members.has(hero)) return;

      this.members.add(hero);
    });
  }

  toArray() {
    return [...this.members];
  }
}
