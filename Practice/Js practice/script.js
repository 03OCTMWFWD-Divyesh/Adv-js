/*

(1) Data Types :
(2) Object :
(3) String :
(4) Array :
(5) Function :
(6) Higher order function :


{} -------> Object Literel......banave che.
[] -------> Array create kare che.
() -------> function create kare che.



Variable :- let, var, const.
function :-
Operator :- Relational operator (<, >, <=, >=, ==, !=, ===, !==), Logical operator (&&(and), ||(or), !(not))
Desision control structure :- if, else, if else, if else if else. 

*/


// * Object Literel :-

const user = {
    name: "Divyesh",
    username: "Dk-007",
    password: "123456",

    login: function (username, password) {
        if (username === this.username && password === this.password) {                       // == (value check kare), === (value & type banne check kare)
            console.log("Login Successfully");
        } else {
            console.log("Login Unsuccessfully");
        }
    }
}
user.login("Dk-007", 123456);


// * Higher order function :-
// (1) Map (2) Filter & (3) Reduce --------array ni method che.


// const obj = new Map();
// console.log(obj);

const obj = new Map();
let res = obj.set([1, 2, 3]);
console.log(res);