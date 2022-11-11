function confirmEnding(str, target) {
  str = str.split(' ').join('');
  console.log(str.substring(str.length-target.length, str.length));
  if (str.substring(str.length-target.length, str.length) === target) {
    console.log('true'); 
  } else {
    console.log('false');
  }
} 
 confirmEnding("Bastian", "n");