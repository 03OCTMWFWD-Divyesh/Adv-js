// Car task done by prototype :-

// contructor functions and the new operator 
const person = function (firstName, birthYear){
    // Intance properties.
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never to this!
    // this.calcAp = function (){
    //     console.log(2037 - birthYear);
    // }

}
const jonas = new person ('jonas', 1991)
console.log(jonas);

person.hey = function (){
    console.log('hey there');
    console.log(this);
}

// person.hey()



////////////////////////////////
// prototype :-
console.log(person.prototype);                // person object prototype
person.prototype.calcAp = function (){
    console.log(2040 - this.birthYear);       // find age
}

jonas.calcAp();

console.log(jonas.__proto__);                              // find jonas persons prototype

console.log(jonas.__proto__ === person.prototype);         // true

console.log(person.prototype.isPrototypeOf(jonas));        // true








