// 1. 1
console.log(document.querySelector(".showme"));

// 1. 2
console.log(document.querySelector("#pillado"));

// 1. 3
console.log(document.querySelectorAll("p"));

// 1. 4
console.log(document.querySelectorAll(".pokemon"));

// 1. 5
console.log(document.querySelectorAll("[data-function='testMe']"));

// 1. 6
let x = document.querySelectorAll("[data-function='testMe']");
console.log(x.item(2));
