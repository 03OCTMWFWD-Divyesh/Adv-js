// * Getter & Setter ......ES6.

class carc1 {
    constructor (make, speed)
    {
        this.make = make;
        this.speed = speed;
    }

    accelerate (){
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    brake (){
        this.speed -= 15;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    get speedus (){
        return this.speed / 1.6;
    }

    set speedus (speed){
        return this.speed * 1.6;
    }
};


const ford = new carc1 ('ford', 120);
console.log(ford.speedus);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.brake();
ford.speedus = 50;
console.log(ford);