window.app = window.app || {};

// this file loaded first
// window.myApp = {}
// line below adds .utils to the empty window.myApp object created above

// this file loaded second
/* window.myApp = {
    utils: {
        caseInsensitiveCompare: function () {}
    }
}
line below adds getDayName and getDayIndex into the existing window.myApp.utils object
*/
let app = (function(){
    
    return {
        incrementer: function incrementer(count = 0) {
            this.count++;
        },

        getCurrentCount: function getCurrentCount() {
            return this.count;
        }
    }


}());
//////////////////////////////////////////2b
// function dayUtils() {//"remember this on the quiz"/this can keep making more objects
//     return {// and it is a function that lives in the global scope

//     };
// }
// const du = dayUtils();
/////////////////////////////////////////////////////////2a
// const dayUtils = (function (){//this is a unique object
//     return {//this gets created for the one moment that its needed, the return gets stored in a variable & then the function disappears.

//     };
// }());

window.app = window.app || {};

window.app.counter = (function (counter) {
    'use strict';

    let count = 0;
    function incrementer(count) {
        this.count++;
    }

    function getCurrentCount() {
        return this.count;
    }

    utils.getDayName = getDayName;
    utils.getDayIndex = getDayIndex;

    return counter;
}(window.app.counter || {}));

//console.log('window.myApp.utils.getDayName(2)', window.myApp.utils.getDayName(2));
//console.log('window.myApp.utils.getDayIndex("Monday")', window.myApp.utils.getDayIndex("Monday"));



/////////////////////////////////////////////////////////2a
// const dayUtils = (function (){//this is a unique object
//     return {//this gets created for the one moment that its needed, the return gets stored in a variable & then the function disappears.

//     };
// }());
let count = 0;
function incrementer(count) {
    this.count++;
}

function getCurrentCount() {
    return this.count;
}
//models
 window.app = window.app || {};

window.app.counter = (function () {
    'use strict';
    //  let count = 0;
    return {
    incrementer: function (count = 0) {
            return count++;
    },

    getCurrentCount: function () {
        return this.count;
    }
};

    //return counter;
}());

// (window.app.counter || {}));

/*Create a counter module/IIFE. The module/IIFE should keep a count. Users of the module must be able to increment the count and get the current count. Reminder – keep global data to a minimum, and keep private data, private. The module should be contained within an outer module (or namespace) “app”.

Create a second module/IIFE in another JavaScript file. This module/IIFE is exactly the same as the first except that this module instead of BEING a counter, creates counters for you, and returns them to you for use. Additionally, keep track of how many counters have been created. This module should also be contained within an outer module (or namespace) “app”.

I.e. In the first case (a) there is only one and only ever will be one counter. You just use that one counter. In the second case (b) you ask for as many counters as you like. Each counter of course keeps its own count. (Recall how we created multiple people without having to repeat the person creation code multiple times).
Again reminder – keep global data to a minimum, and keep private data, private, and of course this second module should be in the same parent outer module as the first, “app”

Note that a and b are very similar, if you can do one, you can do the other. You may just need to think about it a little. If you find this confusing. it might be easier to first make each work without worrying about putting it in a module/IIFE and then once you have the basic idea working, wrap it up in module/IIFE.

 */