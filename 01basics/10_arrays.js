
// let arr = [1, 2, 3, 4, 5];

// let brr = new Array('love', 1, true);
// console.log(arr);

// console.log(brr);

// brr.map((number, index) => {
    
// })

// let arr = [10, 20, 30];

// arr.map((number, index) => {
//     console.log(number);
//     console.log(index);
// })

// let arr = [10, 20, 30, 11, 21, 44, 51];

// let evenArray = arr.filter((number) => {
//     return number % 2 === 0;
// });

// console.log(evenArray);

// let arr = [1, 2, 'rushi', 'jadhav', null];
// arr.forEach((value, index) => {
//     console.log("Number: ", value, "index: ", index);
// })

// let ans = arr.filter((value) => {
//     if (typeof (value) == 'string') {
//         return true;
//     }
//     else {
//         return false;
//     }
// });

// console.log(ans);

let arr = [10, 20, 30, 40, 50];

function getSum(arr) {
    let sum = 0;
    arr.forEach((value) => {
        sum += value;
    });
    return sum;
}

let TotalSum = getSum(arr);
console.log(TotalSum);
