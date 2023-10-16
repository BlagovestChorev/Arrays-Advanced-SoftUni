function arrayManipulator(inputArray, commands) {
    for (let command of commands) {
      let [operation, ...params] = command.split(' ');
  
      if (operation === 'add') {
        let [index, element] = params.map(Number);
        inputArray.splice(index, 0, element);
      } else if (operation === 'addMany') {
        let index = Number(params[0]);
        let elements = params.slice(1).map(Number);
        inputArray.splice(index, 0, ...elements);
      } else if (operation === 'contains') {
        let element = Number(params[0]);
        let index = inputArray.indexOf(element);
        console.log(index);
      } else if (operation === 'remove') {
        let index = Number(params[0]);
        inputArray.splice(index, 1);
      } else if (operation === 'shift') {
        let positions = Number(params[0]);
        for (let i = 0; i < positions; i++) {
          let shiftedElement = inputArray.shift();
          inputArray.push(shiftedElement);
        }
      } else if (operation === 'sumPairs') {
        let summedArray = [];
        for (let i = 0; i < inputArray.length; i += 2) {
          if (i + 1 < inputArray.length) {
            summedArray.push(inputArray[i] + inputArray[i + 1]);
          } else {
            summedArray.push(inputArray[i]);
          }
        }
        inputArray = summedArray;
      } else if (operation === 'print') {
        console.log(`[ ${inputArray.join(', ')} ]`);
      }
    }
  }
  //arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
  arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);