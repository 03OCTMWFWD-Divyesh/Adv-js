// * Form Data :-
            // LocalStorage using (1) Session & (2) Webstorage.
 
// (1) Form Data to local storage :-

// let form = document.getElementById('form');

// form.addEventListener ('submit', (e) => {
//     e.preventDefault();
//     let username = document.getElementById ('username').value;
//     let password = document.getElementById ('password').value;


//     // * LocalStorage :-

//     localStorage.setItem ('username', username);
//     localStorage.setItem ('password', password);

//     alert ("Data submitted successfully");
// }); 




// (2) Form ma Data batave refresh karye na jai :-


// let form = document.getElementById('form');

// if(localStorage.getItem('username') && localStorage.getItem('password')){
//     document.getElementById('username').value = localStorage.getItem('username');
//     document.getElementById('password').value = localStorage.getItem('password');
// };


// form.addEventListener ('submit', (e) => {
//     e.preventDefault();
//     let username = document.getElementById ('username').value;
//     let password = document.getElementById ('password').value;


//     // * LocalStorage :-

//     localStorage.setItem ('username', username);
//     localStorage.setItem ('password', password);

//     alert ("Data submitted successfully");
// }); 





// (3) Html Form Data Clear :-

// document.getElementById ('login').addEventListener ('click', (e) => {
//     e.preventDefault();
//     let username = document.getElementById ('username').value;
//     let password = document.getElementById ('password').value;

//     // * Object Literal :
//     let user = {
//         username : username,
//         password : password
//     }

//     localStorage.setItem ('user', JSON.stringify (user))
//     console.log(JSON.stringify(user));

//     alert("Data submitted successfully");
// });

// document.getElementById ('clear').addEventListener ('click', () => {
//     localStorage.removeItem ('username');
//     localStorage.removeItem ('password');
// });










