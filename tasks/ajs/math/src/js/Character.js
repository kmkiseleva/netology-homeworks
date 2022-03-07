export default class Character {
  constructor(name, type) {
    if (!(name.length >= 2 && name.length <= 10)) {
      throw new Error('Name should be min 2 and max 10 symbols');
    }

    const arrayOfTypes = ['Magician', 'Daemon'];

    if (!arrayOfTypes.includes(type)) {
      throw new Error('Incorrect type');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
}
