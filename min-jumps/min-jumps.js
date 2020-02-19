"use strict";

// Complete this algo
const minJumps = arr => {
  debugger;
  let count = 0;
  for (let n = 0; n < arr.length; n++) {
    let max = [];
    for (let i = n + 1; i <= arr[n]; i++) {
      max.push(arr[i]);
      ++count;
    }
    n = arr.indexOf(Math.max(...max));
  }
};
minJumps([2, 8, 4, 3, 2, 9, 6, 8]);
module.exports = minJumps;
