"use strict";
// Complete this algo
const minJumps = arr => {
  debugger;
  let jumper = 0;
  let jumps = 0;
  while (jumper < arr.length - 1) {
    let max = arr[jumper];
    for (let i = jumper; i < jumper + arr[jumper]; i++) {
      if (arr[i] > arr[max]) {
        max = i;
      }
    }
    jumper = max;
    jumps++;
    if (jumper >= arr.length - 1) return jumps;
    jumper += arr[max];
    jumps++;
  }
  return jumps;
};
minJumps([2, 4, 1, 1, 2, 3, 7, 1, 1, 3]);
module.exports = minJumps;
