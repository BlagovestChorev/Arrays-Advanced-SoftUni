function findSmallestTwoNumbers(arr) {
    if (arr.length < 2) {
      console.log("Array should have at least 2 numbers.");
      return;
    }
  
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);
  
    // Print the first two elements
    console.log(arr[0], arr[1]);
  }
  // Example usage:
  findSmallestTwoNumbers([30, 15, 50, 5]);