const frankenSplice = (arr1, arr2, n) => {
  let newArr = [];
  let newLength = arr1.length + arr2.length;
  let counter = 0;
  for (let i = 0; i < arr2.length; i++) {
    newArr[i] = arr2[i]; 
  }
    
  for (let j = 0; j < arr1.length; j++){
      newArr.splice(n, 0, arr1[j]);
      n++;
    }

  return newArr;
}

frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2);