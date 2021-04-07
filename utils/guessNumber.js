const excludeArr = [];

export function resetExcludeArr() {
  excludeArr.length = 0;
}

export function guessNumberBetween(min, max, exclude) {
  excludeArr.push(exclude);
  // console.log('excludeArr->', excludeArr); // for debugging
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNum = Math.floor(Math.random() * (max - min)) + min;
  if (excludeArr.includes(randomNum)) {
    return guessNumberBetween(min, max, exclude);
  } else {
    return randomNum;
  }
}
