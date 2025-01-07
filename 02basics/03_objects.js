//singleton
// Object.create using constructor

// object literals

const mySym = Symbol("key1");
const mySyYm = Symbol("key1");
const mySQym = Symbol("key1");

const JsUser = {
    name: "rushi",
    age: 18,
[mySym]: "Mykey1",
    "fullname":"Rushi Jadhav",
    location: "Pune",
    email: "rushi@js.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);

console.log(JsUser["fullname"]);

console.log(JsUser[mySym]);

console.log(JsUser);

JsUser.email = "rushi@google.com"; 
// Object.freeze(JsUser);
JsUser.email = "rushi@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello Js USer");
}

JsUser.greetingTwo = function () {
    console.log(`Hello JS Users,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());