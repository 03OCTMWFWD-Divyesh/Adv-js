class bug {
    constructor(name, phrase, power) {
        this.name = name;
        this.phrase = phrase;
        this.power = power;
        this.species = "bug"
    }
    hide = () => console.log("you can not catch me now");
    sayphrase = () => console.log(this.phrase);
    attack = () => console.log(`i am attacking with a power of ${this.power}`);
}


class robot {
    constructor(name, phrase, power) {
        this.name = name;
        this.phrase = phrase;
        this.power = power;
        this.species = "robot"
    }
    transform = () => console.log("optimus primel");
    sayphrase = () => console.log(this.phrase);
    attack = () => console.log(`I am attacking with a power of ${this.power}`);
}

const bug1 = new bug("Buggy", "your debugger doesn't work with nel", 10)
const robot1 = new robot("king", "i can cook", 15)

console.log(bug1.power);       // output -> 10.
robot1.attack();              // output -> I am attacking with a power of 15.