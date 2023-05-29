function findLargestNumber(array) {
    if (array.length === 0) {
      return undefined; 
    }
  
    let largestNumber = array[0]; 
  
    for (let i = 1; i < array.length; i++) {
      if (array[i] > largestNumber) {
        largestNumber = array[i]; 
      }
    }
  
    return largestNumber;
  }

const numbers = [10, 5, 8, 3, 12];
const largestNumber = findLargestNumber(numbers);
console.log(largestNumber);
  