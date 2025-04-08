
// let firstPromise = new Promise((resolve, reject) => {
//     console.log("Rushikesh");
//     reject(new Error("Internal server error"));
// });

let promise1 = new Promise((resolve, reject) => {
    let success = false;
    if (success) {
        resolve("Promise Fullfilled");
    }
    else {
        reject("Promise Unfullfilled");
    }
});

promise1.then((message) => {
    console.log("The success message is:" + message);
}).catch((error) => {
    console.log("the error message is: " + error);
});