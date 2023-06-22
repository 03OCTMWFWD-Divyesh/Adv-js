class User {
    name;
    email;
    #password;
    constructor() {
        console.log("This is default constructor");
    }

    #validateEmail(email) {
        return true;
    }

    #validatePassword(password) {
        return true;
    }

    signUp(name, email, password) {
        let isValidate = false;
        isValidate = this.#validateEmail(email);
        isValidate = this.#validatePassword(password);
        if (isValidate) {
            this.name = name;
            this.email = email;
            this.#password = password;
            console.log("User added successfully");
        } else {
            console.log("Plz entered details again!!");
        }
    }

    login(email, password) {
        if (email === this.email && password === this.#password) {
            console.log("Login succsessfully");
        } else {
            console.log("Login Failed");
        }
    }

    resetPassword(email, newPassword) {
        if (this.email === email) {                                                 // this.email = email
            this.#password = newPassword;
            console.log("Operation successfully");
        } else {
            console.log("Halti pikino tha");
        }
    }




    // * Biji rit :-

    // resetPassword(email, newPassword){
    //     if (email === this.email){
    //         // newPassword = this.#password;
    //         // newPassword === this.#password;
    //         // this.#password = newPassword;
    //         this.#password === newPassword;
    //         console.log("Reset successfully...");
    //     }else{
    //         console.log("Chalaja");
    //     }

    // }
};

const obj = new User();
obj.signUp("king", "king@gmail.com", 123456);
obj.login("king@gmail.com", 123456);
obj.resetPassword("king@gmail.com", "king18");
obj.login("king@gmail.com", "king18");