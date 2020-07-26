// window.app.counter.generateCounters();//a factory function that creates counters
// window.app.counter.howManyGenerated();//keeps track of how many counter functions were created

























//////////////////////////////////////////2b
// function dayUtils() {//"remember this on the quiz"/this can keep making more objects
//     return {// and it is a function that lives in the global scope

//     };
// }
// const du = dayUtils();

//views
window.app = window.app || {};

window.app.views = (function (views) {
    'use strict';

    views.doViewStuff = () => console.log('Doing view stuff');

    return views;
}(window.app.views || {}));