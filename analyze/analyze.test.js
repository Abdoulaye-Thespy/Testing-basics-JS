import { analyse } from './analyze';

test('test min', () => {
  expect(analyse([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4, min: 1, max: 8, leng: 6,
  });
});