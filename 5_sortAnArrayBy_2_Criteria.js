function sortArray (arr){
    let sortedArr = arr.sort((a, b) => a.length - b.length || a.localeCompare(b));

    console.log(sortedArr.join('\n'));
}
sortArray(['alpha', 'beta', 'gamma']);  