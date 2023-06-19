class Enemy {
    constructor (power){
        this.power = power;
    }
    attack = () => console.log(`i am attacking with a power of ${this.power}`);
};

class Alien extends Enemy {
    constructor (name, phrase, power){
        super(power)
        this.name = name;
        this.phrase = phrase;
        this.species = "Alien"
    }
    fly = () => console.log("kkkkkkiiiiiiinnnnnnnggggggg!!");
    sayphrase = () => console.log(this.phrase);
}

const alien1 = new Alien ("Ali", "I am Ali the Alien", 10)
const alien2 = new Alien ("Lian", "Run for your lives!", 15)

alien1.attack();                // output -> i am attacking with a power of 10.
console.log(alien2.power);      // output -> 15.