function checkValue(array, value) {
    return array.includes(value);
  }
  const array = [1, 2, 3, 4, 5];
  const value = 3;
  const isPresent = checkValue(array, value);
  console.log(isPresent);
    