import Daemon from '../Daemon.js';
import Magician from '../Magician.js';

test.each([
  [100, 1, 100],
  [100, 2, 90],
  [100, 3, 80],
  [100, 4, 70],
  [100, 5, 60],
  [100, 6, 50],

  [-100, 1, 0],
  [-100, 2, 0],
  [-100, 3, 0],
  [-100, 4, 0],
  [-100, 5, 0],
  [-100, 6, 0],
])(
  ('check attack calculation, diff distance'),
  (attack, distance, expected) => {
    const demon = new Daemon(distance);
    demon.attack = attack;
    expect(expected).toBe(demon.attack);
  },
);

test.each([
  [100, 1, 100],
  [100, 2, 85],
  [100, 3, 72],
  [100, 4, 60],
  [100, 5, 48],
])(
  ('check attack calculation, diff distance'),
  (attack, distance, expected) => {
    const demon = new Daemon(distance);
    demon.attack = attack;
    demon.stoned = true;
    const result = demon.attack;
    expect(expected).toBe(result);
  },
);

test.each([
  [100, 1, 100],
  [100, 2, 90],
  [100, 3, 80],
  [100, 4, 70],
  [100, 5, 60],
])(
  ('check attack calculation, diff distance, stoned off'),
  (attack, distance, expected) => {
    const demon = new Daemon(distance);
    demon.attack = attack;
    demon.stoned = false;
    const result = demon.attack;
    expect(expected).toBe(result);
  },
);

test('check Magician class', () => {
  const mage = new Magician(1);
  mage.attack = 100;
  mage.stoned = true;
  const result = mage.attack;
  expect(result).toBe(100);
});

test('check Magician class', () => {
  const mage = new Magician(1);
  mage.attack = 100;
  mage.stoned = true;
  const result = mage.stoned;
  expect(result).toBe(true);
});
