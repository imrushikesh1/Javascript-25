let mydiv = document.querySelector('#mydiv');

let newElement = document.createElement('span');
newElement.textContent = "Rushikesh Jadhav";

mydiv.insertAdjacentElement('beforebegin', newElement);