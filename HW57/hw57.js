var myApp = myApp || {};
myApp.Utils = (function (theModule) {
    "use strict";
    let dayArray = ["Sunday", "Monday", "Tueday", "Wednesday", "Thursday", "Friday", "Saturday"];
    theModule.getDayName =  function (num) {
        if (num < 1 || num > 7) {
            return -1;
        }
        return dayArray[num - 1];
    };
    theModule.getDayNumber = function (dayName) {
        const index = dayArray.findIndex(x => x === dayName);
        return index === -1 ? index : index + 1;
    };
    
    return theModule;

}(myApp.Utils || {}));
////////////////////////////////////////file#2
myApp.Utils = (function (aModule) {
    "use strict";
    
        aModule.stringCaseInsensitiveEquals = function (string1, string2) {
            return string1.toUpperCase() === string2.toUpperCase();
        };
    return aModule;

}(myApp.Utils || {}));
console.log(myApp);
let answer1 = myApp.Utils.getDayName(2);
let answer2 = myApp.Utils.stringCaseInsensitiveEquals('apple', 'APPle');
console.log(answer1);
console.log(answer2);