function removeDuplicates(array) {
    return [...new Set(array)];
  }
  
const array = [1,2,3,4,5,5,4];
const uniqueArray = removeDuplicates(array);
console.log(uniqueArray);
