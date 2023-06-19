class character {
    constructor(speed) {
        this.speed = speed;
    }
    move = () => console.log(`i am moving at the speed of ${this.speed}`);
}

class Enemy extends character {
    constructor(power, speed) {
        super(speed)
        this.power = power
    }
    attack = () => console.log(`I am attacking with a power of ${this.power}`);
}

class Alien extends Enemy {
    constructor(name, phrase, power, speed) {
        super(power, speed)
        this.name = name;
        this.phrase = phrase;
        this.species = "alien"
    }
    fly = () => console.log("king");
    sayphrase = () => console.log(this.power);
}

const alien1 = new Alien("Ali", "i am ali the alien!", 10, 50)
const alien2 = new Alien ("Lien", "Run for your lives!!", 15, 60)

alien1.move();                      // output -> i am moving at the speed of 50.
console.log(alien2.speed);          // output -> 60.