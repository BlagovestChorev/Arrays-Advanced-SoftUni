function solve (input){
    let k = input.shift();

    console.log(input.slice(0, k).join(' '));
    console.log(input.slice(-k).join(' '));

}
solve ([2, 7, 8, 9]);
solve ([3, 6, 7, 8, 9]);
solve ([2, 10, 20, 30, 40, 50]); 