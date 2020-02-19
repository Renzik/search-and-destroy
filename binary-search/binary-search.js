"use strict";

// Complete this algo
const binarySearch = (array, target) => {
  const mid = Math.floor(array.length / 2);
  const firstHalf = array.slice(0, mid);
  const secondHalf = array.slice(mid);

  if (target <= firstHalf[firstHalf.length - 1]) {
    return firstHalf.includes(target);
  } else {
    return secondHalf.includes(target);
  }
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
