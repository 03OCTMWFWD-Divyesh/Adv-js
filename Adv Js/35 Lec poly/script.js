// *Polymorphism :-

// (1) Class :-

class user {
    constructor (email, password){
        this.email = email;
        this.password = password;
    }

    login (email, password){
        if(email === this.email && password === this.password){
            console.log('Login Successfully');
        }else{
            console.log('Login Failed');
        }
    }
};


// (2) Class :-

class author extends user {
    #numofpost;
    constructor (email, password){
        super (email, password);
        this.#numofpost = 0;
    }

    createpost (content){
        // Add content to your DB.
        this.#numofpost++;
    }

    getNumofpost(){
        return this.#numofpost;
    }
};


//(3) Class :-

class admin extends user {
    constructor (email, password){
        super (email, password);
    }

    login(email, password){
        // Add extra layer of security as this is an admin account..
        const isvalidatmin = true;            //.........We can have some 2FA type security.
        if(email === this.email && password === this.password){
            console.log('Login Successfully');
        }else{
            console.log('Login Failed');
        }
    }

    removeuser (userid){
        // Remove this userid from your DB.
        console.log('user remove successfully');
    }
};

const nehal = new author ('nm@gmail.com', 'password');
nehal.login('nm@gmail.com', 'password');

const json = new admin ('json@gmail.com', '[object] [object]');
json.login ('json@gmail.com', '[object] [object]');

