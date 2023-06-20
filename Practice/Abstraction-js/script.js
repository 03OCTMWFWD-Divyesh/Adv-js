// alert("Abstraction in javascript");

class User {
    name;
    email;
    #password;
    constructor(){
        console.log("This is default constructor");
    }
    #validateEmail(email){                                                      // #validateEmail => Method che.
        return true;
    }
    #validatePassword(password){
        return password.toString().length >=8
    }
    signUp(name,email,password){
        let isValidate = false;
        isValidate = this.#validatePassword (password);
        isValidate &&= this.#validateEmail (email);
        if(isValidate){
            this.name = name;
            this.email = email;
            this.#password = password;
            console.log("User added successfully");
        }else{
            console.log("Plz enter details again!!");
        }
    }
    login(email,password){
        if(email === this.email && password === this.#password){
            console.log("Login Successfully");
        }else{
            console.log("Authentication failed");
        }
    }
    #isRegisteredUser(email){
        return true;
    }
    resetPassword (email,newPassword){
        if(this.email === email){
            this.#password = newPassword;
            console.log("Operation performed Successfully");
        }else{
            console.log("No account found");
        }
    }
}


const user = new User();                                        // Object che.
user.signUp ("king", "king@gmail.com", 12345678);               // User added successfully. 
// user.#validateEmail("king@gmail.com");                       // Private ne access na kari sakiye aetle error avi jai che.
user.login("king@yahoo.com", "123456");                         // Authentication failed.
user.login("king@gmail.com", 12345678);                         // Login successfully.
user.resetPassword ("kingkohli@gmail.com", "king18");           // No account found.
user.resetPassword ("king@gmail.com", "king")                   // Operation performed successfully.
user.login ("king@gmail.com", "king");                          // Login successfully.
user.signUp ("king", "king@gmail.com", "king");                 // Plz entered details again!!.