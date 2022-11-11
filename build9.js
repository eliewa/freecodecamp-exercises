const bouncer = arr => {
  let newArr = [];
  let counter = 0;
  for (let i = 0; i < arr.length; i++){
    if(Boolean(arr[i])){
      newArr[counter] = arr[i];
      counter++;
    }
  }

  return newArr;
}

bouncer([false, null, 0, NaN, undefined, ""])