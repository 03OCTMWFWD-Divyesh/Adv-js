// const user = {
//     name : 'Ram',
//     username : 'say hi',
//     password : 'pass',

//     signin : function(username, password){
//         if(username === this.username && password === this.password){
//             console.log('Login Successfully');
//         }else{
//             console.log('Authentication Failed');
//         }
//     }
// };


// user.signin("hi Ram", "pass");
// user.signin("say hi", "pass");
// console.log(user.name);
// console.log(user.password);
// console.log(user.signin);




// * Getter Method & Setter Method (Class) :-

// class signin {
//     #password;
//     constructor (name, username, password)
//     {
//         this.name = name;
//         this.username = username;
//         this.#password = password;
//     }

//     getter (username, password)
//     {
//         if(username === this.username && password === this.#password){
//             console.log("Login Successful");
//         }else{
//             console.log("Login Failed");
//         }
//     }

//     setter(newpasword)
//     {
//         this.#password = newpasword;
//     }
// };

// const obj = new signin ("virat", "kohli", "king18");
// obj.getter("kohli", "king18");
// console.log(obj.name);
// console.log(obj.password);
// // console.log(obj.#password);             // ................. Error
// obj.setter("king1818");
// obj.getter("kohli", "king1818");
// obj.getter("king", "king18")





// * Inheritance :-

// (1)

class user {
    #password;
    constructor(email, password) {
        this.email = email;
        this.#password = password;
    }

    login(email, password) {
        if (email === this.email && password === this.password) {
            console.log("Login Successfully");
        } else {
            console.log("Login Failed");
        }
    };

    resetpassword(newpassword) {
        this.#password = newpassword;
    }

    logout() {
        console.log("Logout Successfully");
    }
};


// (2)

class author extends user {
    #numofpost;
    constructor(email, password) {
        super(email, password);
        this.#numofpost = 0;
    }

    createpost(content) {
        // Add content to your DB.
        this.#numofpost++;
    }

    getnumofpost() {
        return this.#numofpost;
    }
};


// (3)

class admin extends user {
    constructor(email, password) {
        super(email, password);
    }

    removeuser(userid) {
        // Remove this userid from your DB.
        console.log("user remove successfully");
    }
};

//(1)

// const king = new user ("king@gmail.com", "password");
// king.login("king@gmail.com", "password");


// (2)

// const king = new author ("king@gmail.com", "password");
// king.login("king@gmail.com", "password");
// king.createpost('i hope you are enjoying this 100.');
// king.createpost('i am king....');
// console.log(king.getnumofpost());


// (3)

const king = new admin('king@gmail.com', '[object] [object]');
king.login('king@gmail.com', '[object] [object]');
king.resetpassword('{id : 1 }');
king.login('king@gmail.com', '{id : 1 }');
king.removeuser(12);




