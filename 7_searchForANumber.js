function searchForNumber(mainArray, instructions) {
    const takeCount = instructions[0];
    const deleteCount = instructions[1];
    const searchNumber = instructions[2];
  
    let takenArray = mainArray.slice(0, takeCount);
    takenArray.splice(0, deleteCount);
  
    const count = takenArray.filter((num) => num == searchNumber).length;
  
    console.log(`Number ${searchNumber} occurs ${count} times.`);
  }
  searchForNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);