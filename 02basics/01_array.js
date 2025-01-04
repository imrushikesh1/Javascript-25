// // array

const myArr = [0, 1, 2, 3, 4, 5]
// const myHeros = ["Shaktiman", "naagraj"]

// const myArr2 = new Array(0, 1, 2, 4, 5)

// // console.log(myArr[5]);

// myArr.push(6)
// myArr.push(7)

// console.log(myArr);
// myArr.pop()

// console.log(myArr);

// myArr.unshift(9)

// console.log(myArr);
// myArr.unshift(10)

// console.log(myArr);
// myArr.shift();
// console.log(myArr);

// myArr.shift();
// console.log(myArr);

// myArr.shift();
// console.log(myArr);

// const newArr = myArr.join();


/* --------  THEORY  JOIN METHOD --------------
The join() method returns an array as a string.

The join() method does not change the original array.

Any separator can be specified. The default is comma (,).
*/


// console.log(myArr);

// console.log(newArr);

console.log("MAIN:ARR", myArr);

const myNew1 = myArr.slice(1, 3);

console.log("Sliced One => ", myNew1);

const myNew2 = myArr.splice(1, 3);

console.log("Spliced One => ", myNew2);

console.log("Changed Arr => ", myArr);



