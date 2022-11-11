const largestOfFour = arr => {
  let largest = [];
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i][0];
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] > num){
        num = arr[i][j];
      }
    }
  largest.push(num);
};
  return largest;
};

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
