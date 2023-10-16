function processNumbers(arr) {
    let result = [];
  
    for (const element of arr) {
      const number = parseFloat(element);
      if (isNaN(number)) {
        console.log("Invalid input: " + element);
      } else if (number < 0) {
        result.unshift(number);
      } else {
        result.push(number);
      }
    }
  
    for (const element of result) {
      console.log(element);
    }
  }
 
  processNumbers(['3', '-2', '0', '-1']);
