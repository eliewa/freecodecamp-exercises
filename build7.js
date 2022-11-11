const titleCase = str => {
  let capital = '';
  let rest = '';
  let word = '';
  str = str.toLowerCase();
  str = str.split(' ');
  for (let i = 0; i < str.length; i++) {
    capital = str[i].charAt(0).toUpperCase();
    rest = str[i].slice(1);
    if (i !== str.length - 1){
      word += capital + rest + ' ';
    } else {
      word += capital + rest;
    }
   
  }

  console.log(word);
    return str;
  }


titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");