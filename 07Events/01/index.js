


// function ChangeText() {
//     let fpara = document.getElementById('fpara');
//     fpara.textContent = "Hello Brother";
// }

// let fpara = document.getElementById('fpara');

// fpara.addEventListener('click', ChangeText);

// fpara.removeEventListener('click', ChangeText);

// fpara.addEventListener('click', function () {
//     let fpara = document.getElementById('fpara');
//     fpara.textContent = "Hello Brother";
// });

// fpara.removeEventListener('click', function () {
//     let fpara = document.getElementById('fpara');
//     fpara.textContent = "Hello Brother";
// });
//<------------------------------- Note ------------------------------------------>
// Using the reference of the object is most important because directly writing the 
//function is not acceptable using both the functions are treated as different objects
// listners
//<------------------------------- Note ------------------------------------------>

// let fanchor = document.getElementById('fanchor');

// fanchor.addEventListener('click', function (event) {
//     event.preventDefault();
//     fanchor.textContent = "done click done"; 
// });

let paras = document.querySelectorAll('p');
function alertPara(event) {
    alert("You have clicked :" + event.target.textContent);
}
for (let i = 0; i < paras.length; i++){
    let  para = paras[i];
    para.addEventListener('click', alertPara);
}