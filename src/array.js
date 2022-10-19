export function sortArray(unsortedArray) {
  return unsortedArray.sort();
}

export function multiplyArrayWithValue(multiplier, array) {
  return array.map((number) => number * multiplier);
}

export function combineArray(array) {
  let text = '';
  for (let i = 0; i < array.length; i++) {
    if (i === array.length - 1) {
      text += array[i];
    } else {
      text += array[i] + ' ';
    }
  }
  return text;
}
