function getIndexToIns(arr, num) {
  let counter = 0;
  arr = arr.sort((a,b)=>a-b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] - num >= 0) {
      counter = i;
      break;
    } else {
      counter = null;
    }
  }

  if (counter === null) {
    arr.push(num);
    counter = arr.length - 1;
  }
  return counter;
}

getIndexToIns([3, 10, 5], 3);