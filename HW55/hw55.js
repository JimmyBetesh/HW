"Use strict";
//////////////////////////////////////#1
const letters1 = ["a", "B", "c"];
const letters2 = ["A", "B", "C"];
const letters3 = ["a", "b", "c"]

function ourEvery(theArray, callback) {
// efficient way
    for(let i = 0; i < theArray.length; i++) {
        if (!callback(theArray[i])) {
            return false;
        }
    } 

    return true;

// inefficient way
//     let result = true;
//     for (let i = 0; i < theArray.length; i++) {
//         if (!callback(theArray[i])) {
//             result = false;
//         }
//     } 
// return result;
}


    

const answer1 = ourEvery(letters1, isUpper);
const answer2 = ourEvery(letters2, isUpper);
console.log('isEveryUpper',letters1, answer1);
console.log('answer2', answer2);

function isUpper(x) {
    return x === x.toUpperCase();
}
function isLower(x) {
    return x === x.toLowerCase();
}
// const answer3 = ourEvery(letters3, isLower);
console.log('answer 3',ourEvery(letters3, isLower) );
console.log(`answer 3 ${ourEvery(letters3, isLower)}`);

////////////////////////////////////////////#2
function ourSome(theArray, callback) {
   
    for (let i = 0; i < theArray.length; i++) {
        if (callback(theArray[i])) {
            return true;
        }
    }

    return false;
}
console.log(`${letters1} isSomeUpper ${ourSome(letters1, isUpper)}`);
console.log(letters1.some(isUpper));
console.log(`${letters1} isSomeLower ${ourSome(letters1, isLower)}`);
console.log(letters1.some(isLower));
console.log(`${letters2} isSomeUpper ${ourSome(letters2, isUpper)}`);
console.log(`${letters2} isSomeLower ${ourSome(letters2, isLower)}`);
console.log(`${letters3} isSomeUpper ${ourSome(letters3, isUpper)}`);
console.log(`${letters3} isSomeLower ${ourSome(letters3, isLower)}`);
console.log(letters1.some(isUpper));
///////////////////////////////////////////////////#3
const arrayOfNumbers = [1, 2, 3, 4, 5];
function onlyIf(array, test, action){
    for(let i=0; i < array.length; i++){
        if(test(array[i])){
         action(array[i]);
        }
    }
}
// some test function
function isEven(x){
    return x % 2 === 0;
}
// some action function
function printIt(x){
    console.log(x)
}
onlyIf(arrayOfNumbers, isEven, printIt);
///////////////////////////////////////////#4
let evenNumbers = arrayOfNumbers.filter(isEven);
evenNumbers.forEach(printIt);

arrayOfNumbers.filter(isEven).forEach(printIt);
