export default class Character {
  constructor(distance) {
    this.distance = distance;
  }

  set attack(attack) {
    this.attackValue = attack;
  }

  get attack() {
    let calculatedAttack = this.attackValue * ((100 - (this.distance - 1) * 10) / 100);
    if (this.stonedValue) {
      calculatedAttack -= Math.log2(this.distance) * 5;
    }

    if (calculatedAttack < 0) {
      return 0;
    }
    return Math.floor(calculatedAttack);
  }
}
