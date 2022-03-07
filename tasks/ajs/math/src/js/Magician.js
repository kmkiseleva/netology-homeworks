import MathCharacter from './MathCharacter';

export default class Magician extends MathCharacter {
  constructor(name) {
    super(name, 'Magician');
    this.attack = 10;
    this.defence = 40;
  }
}
