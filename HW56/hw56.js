let x = (function () {
    "use strict";
    let dayArray = ["Sun", "Mon", "Tue", "W", "Th", "Fri", "Sat"];
    return {
        getDayName: function (num) {
            if (num < 1 || num > 7) {
                return -1;
            }
            return dayArray[num - 1];
        },
        getDayNumber: function (dayName) {
            /*Amateur way*/
            // for (let index = 0; index < dayArray.length; index++) {
            //     if (dayName === dayArray[index]) {
            //         return index + 1;
            //     }
            // }
            // return -1;
            /*Beast Mode*/
            const index = dayArray.findIndex(x => x === dayName);
            return index === -1 ? index : index + 1;
        }

    };
}());
/////////////////////////////////////////#2
let y = (function () {
    "use strict";
    let years, rate;
    return {
        calculateInterest: function (principal) {
            return principal * rate * years;
        },
        setRate: function (interestRate) {
            rate = interestRate;
        },
        setYears: function (numOfYears) {
            years = numOfYears;
        }
    };
}());