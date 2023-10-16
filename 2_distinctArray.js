// function distinctArray (arr){
//     let uniqueNum = [];

//     for(let num of arr){
//         if(!uniqueNum.includes(num)){
//             uniqueNum.push(num);
//         }
//     }
//     console.log(uniqueNum.join(' '));
// }
// distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])

//more advance solution:
function distinctArray(arr) {
    const distinctElements = [...new Set(arr)];
    console.log(distinctElements.join(' '));
  }
  distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
