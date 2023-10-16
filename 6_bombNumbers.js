function bombNumbers (arr1, arr2){
    let [bombNum , power] = arr2; 

    while (arr1.includes(bombNum)){
        let index = arr1.indexOf(bombNum);
        arr1.splice(Math.max(0 ,index - power), power * 2 + 1, 0);
    }
    let sum = 0;
    for (let num of arr1){
        sum += num;
    }
    console.log(sum);
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], 
[4, 2]); 