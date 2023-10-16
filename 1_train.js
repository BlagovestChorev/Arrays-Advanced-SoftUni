function train(arr){
    let wagon = arr[0].split(' ').map(Number);
    let capacity = Number(arr[1]);

    for (let i = 2; i < arr.length; i++){
        let command = arr[i];
        let elemnt = command.split(' ');

        if(elemnt[0] == 'Add'){
            let pasengers = Number(elemnt[1]);
            wagon.push(pasengers);
        } else{
            let pasengers = Number(elemnt[0]);

            for (let j = 0; j < wagon.length; j ++){
                if (wagon[j] + pasengers <= capacity){
                    wagon[j] += pasengers;
                    break;
                }
            }
        } 
    }
    console.log(wagon.join(' '));
}
train([
 '32 54 21 12 4 0 23',
 '75',  
 'Add 10', 
 'Add 0', 
 '30', 
 '10', 
 '75'
]);
