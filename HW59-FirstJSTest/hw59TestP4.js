// window.app.counter.increment(10);//increments counter 10x

// let x = window.app.counter.generateCounters(/*5*/);
// let y = window.app.counter.generateCounters(/*15*/);
// x(5);
// y(15);

///////if it returns, then...
// let z = window.app.counter.getCurrentCount();
// console.log(z); 
//////if it prints, then...
//  window.app.counter.getCurrentCount();

// let p = window.app.counter.howManyGenerated();
// console.log(p);


















//views2
window.app = window.app || {};

window.app.views = (function (views) {
    'use strict';

    views.doViewStuff2 = () => console.log('Doing view stuff2');

    return views;
}(window.app.views || {}));