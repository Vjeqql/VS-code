
// let arr = [10, 40, 70]
// for (let i = 0; i < arr.length; i++){
    // console.log (arr[i]);
// }

// function Sum (numbers) {
    // let sum = 0;
    // for ( let i = 0; i < numbers.length; i++){
        // sum += numbers[i];
    // }
    // console.log (sum);
// }
// Sum ([1, 2, 3, 4, 5, 6, ])

function Stars (count, rows){
    for (let i = 0; i < rows; i++){
        let stars = '';
        for (let j = 0; j < count; j++){
            stars += '*';
        }   
        console.log (stars);
    }
}
Stars (5, 3)
console.log ('--------------------')
Stars (3, 5)
