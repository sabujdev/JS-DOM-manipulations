
function summation(arr){
    let sum = 0;

    for( let index = 0;  index < arr.length ; index++){
        sum += arr[index];
    }
    return sum;
}

const arr = new Array(12, 13, 33, 55, 1, 6, );

const totalSum = summation(arr)
console.log(totalSum);