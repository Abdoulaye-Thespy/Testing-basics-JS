export const analyse = (arr) => {
  let min = arr[0];
  let average = 0;
  let max = 0;
  const leng = arr.length;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
    sum += arr[i];
  }


  average = sum / leng;
  return {
    min, average, max, leng,
  };
};