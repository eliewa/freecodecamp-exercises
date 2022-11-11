function truncateString(str, num) {
  for(let i = 0; i < str.length; i++){
    if(i >= num) {
      str = `${str.slice(0,num)}...`;
    }
  }
  return str;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));