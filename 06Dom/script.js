// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);

let divs = document.querySelectorAll(".box");
console.log(divs);

let idx = 1;

for (div of divs) {
    div.innerText = `new unique value ${idx}`;
    idx++;
}

// divs[0].innerText = "New unique value1 ";
// divs[1].innerText = "New unique value2 ";
// divs[2].innerText = "New unique value3 ";