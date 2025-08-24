"use strict";
function logMEssage(message) {
    console.log(message);
}
//never
function throwError(message) {
    throw new Error(message);
}
function loop(message) {
    while (true) {
        console.log(message);
    }
}
function combine(a, b) {
    return a + b;
}
console.log(combine(6, 6));
console.log(combine("sara ", "bagheri"));
const h1 = document.createElement("h1");
h1.textContent = `the userStatus is    👋`;
h1.style.textAlign = "center";
h1.style.marginTop = "50px";
document.body.appendChild(h1);
document.body.appendChild(h1);
document.body.appendChild(h1);
//# sourceMappingURL=index.js.map