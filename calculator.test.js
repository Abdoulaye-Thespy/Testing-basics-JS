import {calculatorObj} from './calculator'
test('add two numbers', () => {
  expect(calculatorObj.add(2,5)).toBe(7);
});

test('substract two numbers', () => {
  expect(calculatorObj.sub(5,2)).toBe(3);
});

test('add two numbers', () => {
  expect(calculatorObj.mul(2,5)).toBe(10);
});

test('add two numbers', () => {
  expect(calculatorObj.div(5,2)).toBe(2.5);
});
