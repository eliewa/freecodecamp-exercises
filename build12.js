function chunkArrayInGroups(arr, size) {
  let str = '';
  let arr3 = []
  let i = 0;

  for(let j = 0; j < arr.length; j++) {
    str = '';
    for(i = 0; i < size; i++) {
      str += arr[0];
      arr.shift();
      if(arr[i] === undefined) {
        break;
      }
      
    }
    arr3[j] = str.split('');
  }


  console.log(arr3);
  return arr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)
