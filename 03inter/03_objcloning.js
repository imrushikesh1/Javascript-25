// // let src = {
// //     age: 12,
// //     wt: 68,
// //     ht:180
// // };

// // let dest = { ...src };
// // // let dest = src;
// // console.log(src);
// // console.log(dest);
// // dest.age = 90;
// // console.log(src);

// const person = {
//     name: "Alice",
//     age: 25,
//     city: "New York"
// };

// const { name, age } = person;
// console.log(name);
// console.log(age);

// const person1 = {
//     fullName: "rj",
//     age: 30,
//     details: {
//         lname: "raje",
//         dept: "it"
//     }
// };

// const { details: { lname, dept } } = person1;
// console.log(lname);
// console.log(dept);

let src = {
    age: 12,
    wt: 68,
    ht: 180
};

let dest = {};

for (let key in src) {
    let newKey = key;
    let newValue = src[key];

    dest[newKey] = newValue;
}
console.log(dest);

// let src2 = {
//     value: 101,
//     name: "love babbar"
// };

// let desti = Object.assign({}, src, src2);
// console.log(desti); 
