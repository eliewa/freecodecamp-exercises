function mutation(arr) {
  let str1 = '';
  let str2 = '';
  let bool;
  for (let i = 0; i < arr[0].length; i++) {
    str1 += arr[0].charAt(i).toLowerCase();
  }

  
  for (let j = 0; j < arr[1].length; j++) {
    str2 += arr[1].charAt(j).toLowerCase();
  }

  for (let k = 0; k < str2.length; k++) {
    for(let l = 0; l < str1.length; l++) {
      if (str2.charAt(k) === str1.charAt(l)){
        bool = true;
        break;
      } else {
        bool = false;
        
      }
    }
    if(!bool) {
      break;
    }
  }

  return bool;
}

console.log(mutation(["hello", "neo"]));