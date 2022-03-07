import Character from './Character';

export default class MathCharacter extends Character {
  constructor(name, type) {
    super(name, type);
    this.distance = 1;
    this.datura = false;
  }

  get stoned() {
    return this.datura;
  }

  set stoned(value) {
    this.datura = value;
  }

  get attack() {
    const damageStrength = (100 - (this.distance - 1) * 10) / 100;
    const resultAttack = this.mainAttack * damageStrength;
    if (this.datura) {
      const attackPower = Math.floor(
        resultAttack - Math.log2(this.distance) * 5,
      );
      return attackPower > 0 ? attackPower : 0;
    }

    return resultAttack;
  }

  set attack(value) {
    this.mainAttack = value;
  }
}
