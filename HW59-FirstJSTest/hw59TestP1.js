(function () {
    'use strict';
    function myMap(array, callback) {
        const newArray = [];
        for (let i = 0; i < array.length; i++) {
            const result = callback(array[i], i, array);
            newArray.push(result);
        }
        return newArray;
    }

    let arr = [2, 4, 6];
    const doubleUp = myMap(arr, num => num *= 2);
    console.log(arr);
    console.log(doubleUp);

}());