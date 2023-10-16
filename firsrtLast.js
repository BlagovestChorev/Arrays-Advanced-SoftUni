function solve (arr){

    let firstNum = arr.shift();
    let lastNum = arr.pop();

    console.log(Number(firstNum) + Number(lastNum));

}
solve(['5', '10']);
solve(['20', '30', '40']);