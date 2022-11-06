export function getbubbleSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    bubbleSortHelper(array, 0, array.length - 1, animations);
    return animations;
  }
  function bubbleSortHelper(
    Array,
    startIdx,
    endIdx,
    animations,
  ) {
    if (startIdx === endIdx) return;
    // let array = stateArray.slice(0),
    // animations = [],
   let sorted = false,
    round = 0;
while (!sorted) {
  sorted = true;
  for (let i = 0; i < Array.length - 1 - round; i++) {
    animations.push([i, i + 1]);
    if (Array[i] > Array[i + 1]) {
      animations.push([i, i + 1]);
      let temp = Array[i];
      Array[i] = Array[i + 1];
      Array[i + 1] = temp;
      sorted = false;
    //   animations.push(Array.slice(0));
    //   animations.push([]);
    }
  }
//   animations.push([true, Array.length - 1 - round]);
  round++;
}
}