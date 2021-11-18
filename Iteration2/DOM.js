// 2. 1
const div = document.createElement("div");
document.body.appendChild(div);

// 2. 2
const p = document.createElement("p");
div.appendChild(p);

// 2. 3
const div2 = document.createElement("div");
for (let i = 0; i < 6; i++) {
  let p2 = document.createElement("p");
  div2.appendChild(p2);
}
document.body.appendChild(div2);

// 2. 4
const p3 = document.createElement("p");
p3.textContent = "soy dinamico";
document.body.appendChild(p3);

// 2. 5
document
  .querySelector("h2.fn-insert-here")
  .appendChild(document.createTextNode("Wubba Lubba dub dub"));

// 2. 6
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];
const ul = document.createElement("ul");
for (app of apps) {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(app));
  ul.appendChild(li);
}
document.body.appendChild(ul);

// 2. 7
let r = document
  .querySelectorAll(".fn-remove-me")
  .forEach((item) => item.remove());

// 2. 8
let div3 = document.querySelectorAll("div")[1];
let p4 = document.createElement("p");
p4.textContent = "voy en medio!";
document.body.insertBefore(p4, div3);
console.log(div3);

// 2. 9
// no conseguido
