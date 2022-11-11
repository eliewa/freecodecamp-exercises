function findElement(arr, func) {
  let num = 0;
  let i = 0;
  while (i < arr.length) {
    if (func(arr[i])) {
      num = arr[i];
      break;
    }
    i++;
  }
  return num;
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));