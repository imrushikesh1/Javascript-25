let arr = [
    function (a, b) {
        return a + b;
    },
    function (a, b) {
        return a - b;
    },
    function(a, b){
        return a * b;
    }
];

let first = arr[2];
let ans = first(10, 5);
console.log(ans);
