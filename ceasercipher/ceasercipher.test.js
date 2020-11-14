import { encrypt } from './ceasercipher';

test('it shifts by x characters', () => {
  expect(encrypt('Christian Ruiz', 7)).toBe('Joypzaphu Ybpg');
});

test('it accepts punctuation', () => {
  expect(encrypt("It's a hard knock life", 8)).toBe("Qb'a i pizl svwks tqnm");
});

test('it keeps the same casing', () => {
  expect(encrypt("A Dog's Life", 5)).toBe("F Itl'x Qnkj");
});

test('it accepts very large numbers', () => {
  expect(encrypt('Sugar', 11902)).toBe('Moaul');
});