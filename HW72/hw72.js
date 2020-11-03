(function(){
    'use strict';
    function Vehicle(color){
        this.color = color;
    }
    Vehicle.prototype.go = function(speed){
        this.speed = speed;
        console.log(`The vehicle is now going at ${speed} mph.` )
    };
    Vehicle.prototype.print = function(){
        console.log(this.color, this.speed)
    };

    function Plane(){
    }

    Plane.prototype = Object.create(Vehicle.prototype);
    Plane.prototype.go = function (speed) {
        this.speed = speed;
        console.log(`The plane is now flying at ${speed} mph.`)
    }

    const BMW = new Vehicle('Blue');
    const Boeing747 = new Plane();
    BMW.go(75);
    BMW.print();
    Boeing747.go(750);
    Boeing747.print();
    
})();