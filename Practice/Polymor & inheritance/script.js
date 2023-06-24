/*

Object oriented programming :-
(1) Class :- class User {}
(2) Object :- const obj = new user ();
(3) constructor :- Constructor(){}
(4) Inheritance :- 
(5) Polymorphism :-
(6) Encapsulation :- # private
(7) Abstraction :-
(8) this. :-

*/



// * Object Literal :-

// const user = {
//     name : 'king',
//     userName : 'king@gmail.com',
//     password : '123456',
//     login : function (userName, password){
//         if(userName === this.userName && password === this.password){
//             console.log("Login successfully");
//         }else {
//             console.log("Login failed");
//         }
//     }
// }

// user.login ("king@gmail.com", "123456");
// user.login ("king@gmail.com", 123456);





/*
Design Pattern :-
(1) Creational
(2) Structural
(3) Behavioural


Factory method
Abstract factory
Builder
Prototype
Singleton

*/




// * Object oriented programming :-

// class User {
//     #password           // Private object.
//     constructor(name, email, password) {
//         this.name = name;
//         this.email = email;
//         this.#password = password;
//     }

//     login(email, password) {
//         if (email === this.email && password === this.#password) {
//             console.log("Login successfully");
//         } else {
//             console.log("Login Failed");
//         }
//     };

// resetPassword(email, newPassword) {
//    if(this.email === email){
//     this.#password = newPassword;
//     console.log("operation successfully");
//    }else{
//     console.log("Chal nikal");
//    }
// };

//     setPassword(newPassword){
//         this.#password = newPassword;
//     };

// };

// const obj = new User ("king", "king@gmail.com", "123456");
// obj.login("king@gmail.com", "123456");
// obj.setPassword("4143");
// obj.resetPassword("king@gmail.com", "4143");
// obj.login("king@gmail.com", "4143");





// * Polymorphsim & Encapsulation : Inheritance

// * Inheritance :-

class User {
    #password;
    constructor(email, password) {
        this.email = email;
        this.#password = password;
    };

    login(email, password) {
        if (email === this.email && password === this.#password) {
            console.log("Login Successfully");
        } else {
            console.log("Login Failed");
        }
    };

    resetPassword(newPassword) {
        this.#password = newPassword;
    };

    logOut() {
        console.log("Logout Successfull");
    };
};


class Author extends User {
    #numOfPost;
    constructor(email, password) {
        super(email, password);
        this.#numOfPost = 0;
    };

    createPost(content) {
        this.#numOfPost++;
    };

    getNumOfPost() {
        return this.#numOfPost;
    };
};


class Admin extends User {
    constructor(email, password) {
        super(email, password);
    };

    removeUser(userId) {
        console.log("user remove successfully");
    };
};

const obj = new Author("king@gmail.com", "123456");
obj.login("king@gmail.com", "123456");

obj.createPost('Welcome to react js programming');
obj.createPost('Welcome to inheritance in js');
console.log(obj.getNumOfPost());

const admin = new Admin("abd@gmail.com", "abd17");
admin.removeUser();




