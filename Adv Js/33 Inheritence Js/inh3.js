class character {
    constructor(speed){
        this.speed = speed;
    }
    move = () => console.log(`i am moving at the speed of ${this.speed}`);
}

class Enemy extends character {
    constructor (name, phrase, power, speed){
        super(speed)
        this.name = name;
        this.phrase = phrase;
        this.power = power;
    }
    sayphrase = () => console.log(this.phrase);
    attack = () => console.log(`I am attacking with a power of ${this.power}`);
}

class Alien extends Enemy {
    constructor (name, phrase, power, speed){
        super(name, phrase, power, speed)
        this.species = "alien"
    }
    fly = () => console.log("king");
}

class Bug extends Enemy {
    constructor (name, phrase, power, speed){
        super(name, phrase, power,speed)
        this.species = "bug"
    }
    hide = () => console.log("You can't catch me now!");
}

class Robot extends Enemy {
    constructor (name, phrase, power, speed){
        super (name, phrase, power, speed)
        this.species = "robot"
    }
    transform = () => console.log("Optimus prime!");
}

const alien1 = new Alien ("Ali", "i am ali the alien!", 10, 50)
const alien2 = new Alien ("Lien", "Run for your lives!", 15, 60)

const bug1 = new Bug ("Buggy", "your debugger doesn't work with me!", 25, 100)
const bug2 = new Bug ("Erik", "i Drink decaf!", 5, 120)

const robot1 = new Robot ("tito", "I can cook swim and dance", 125, 30)
const robot2 = new Robot ("iron", "iron man", 155, 40)

console.log(alien1.name);
alien1.sayphrase();
alien1.move();
console.log(alien1.power);

alien2.attack();
console.log(alien2.name);

bug1.hide();
console.log(bug1.phrase);

bug2.hide();
bug2.attack();
console.log(bug2.species);

robot1.transform();
robot1.attack();

robot2.sayphrase();
console.log(robot2.speed);
console.log(robot2.power);