export const encrypt = (input, shift) => {
  let result = '';
  for (let i = 0; i < input.length; i++) {
    const c = input.charCodeAt(i);

    if (c >= 65 && c <= 90) {
      result += String.fromCharCode((c - 65 + shift) % 26 + 65);
    } else if (c >= 97 && c <= 122) {
      result += String.fromCharCode((c - 97 + shift) % 26 + 97);
    } else {
      result += input.charAt(i);
    }
  }
  return result;
};