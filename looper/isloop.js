"use strict";

//Complete this algo
// const isLoop = linkedlist => {
//   let head = linkedlist.head;
//   while (head) {
//     console.log(head.next, "test");

//     if (head.value > head.next.value) {
//       console.log(typeof head.value);
//       return true;
//     } else {
//       head = head.next;
//     }
//   }
//   return false;
// };

const isLoop = linkedlist => {
  let head = linkedlist.head;
  const hashMap = {};
  while (head) {
    if (hashMap[head.value]) {
      return hashMap[head.value];
    } else {
      hashMap[head.value] = true;
      head = head.next;
    }
  }
  return false;
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
