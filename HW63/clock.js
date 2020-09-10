(function(){
    'use strict';

    function get(id) {
        return document.getElementById(id);
    }
    const clock = document.createElement('div');
    document.body.appendChild(clock);

    // let clock = get("theClock");
    let d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    clock.style['fontSize'] = '50px';
    clock.style['textAlign'] = 'center';
    setInterval(() => {
        clock.innerHTML = `${hours}:${minutes}:${seconds}`;
        seconds++;
        if(seconds >= 60){
            seconds = 0;
            minutes++;
            if (minutes >= 60){
                minutes = 0;
                hours++;
                if (hours >= 24){
                    hours = 0;
                }
            } 
        }

    }, 1000); 




    

}());