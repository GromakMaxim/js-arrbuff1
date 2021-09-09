import Character from './Character.js';

export default class MathCalculator extends Character {
  set stoned(value) {
    this.stonedValue = !!value;
  }

  get stoned() {
    return this.stonedValue;
  }
}
