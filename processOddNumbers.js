/*function solve (arr){
    let oddIndex = arr.filter((x, i) => i % 2 != 0);
    let doubled = oddIndex.map(x => x * 2);
    let result = doubled.reverse();

    console.log(result.join(' '));
}
solve([10, 15, 20, 25]);
solve([3, 0, 10, 4, 7, 3]); 
*/
 //Shorter solution:

function solve (arr){
    console.log(
        arr
        .filter((x, i) => i % 2 != 0)
        .map(x => x * 2)
        .reverse()
        .join(' ')
        );
}
solve([10, 15, 20, 25]);