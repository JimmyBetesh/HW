"Use Strict";
///////////////////////////////////////////////#1
function multiply(multiplicand, multiplier){
    let product = multiplicand * multiplier;
    return product;
}
let product1 = multiply(2,5);
let product2 = multiply(2, 6);
console.log(product1);
console.log(product2);
////////////////////////////////////////////////#2
function getMultiplier() {
    return function (multiplicand, multiplier){
           return multiply(multiplicand, multiplier);
    };
}
const multiplier = getMultiplier();
let product3 = multiplier(3, 5);
let product4 = multiplier(3, 6);
console.log(product3);
console.log(product4);
////////////////////////////////////////////////#3
function getMultiplier2(multiplier) {
    return function (multiplicand) {
        return multiply(multiplicand, multiplier);
    };
}
const multiplyByFive = getMultiplier2(5);
let product5 = multiplyByFive(3);
const multiplyBySix = getMultiplier2(6);
let product6 = multiplyBySix(100);
console.log(product5);
console.log(product6);
//////////////////////////////////////////////The End