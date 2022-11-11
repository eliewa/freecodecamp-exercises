function repeatStringNumTimes(str, num) {
  let i = 0;
  let s = '';
  if (num > 0){
    while (i < num) {
    s += str;
    i++;
    }
  }
  console.log(s);
  return s;
}

repeatStringNumTimes("abc", 3);