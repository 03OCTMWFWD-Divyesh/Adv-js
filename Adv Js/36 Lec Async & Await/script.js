// * Async :-
// ---->   Declares a function as one that will contain the await keyword within it.

// * Await :-
// ---->    Consumes an asynchronous function that returns a promise with synchronous syntax.

// -----> Possibly the most common use case in all of javascript for async and await is using the browsers buillt-in fetch API. Listing 1 declares an async function and uses await within it. The purpose is to pull some json data from the public star wars API.



// async function getstarwarsData (){
//     try {
//         const response = await fetch ('https://v2.jokeapi.dev/joke/programming? type=single');
//         const data = await response.json();
//         console.log(data);
//     }catch (error){
//         console.log(error);
//     }
// };
// getstarwarsData();






// * File handling :-

// try {
//     let x = x + y;
// }catch(error){
//     console.log('Error found');
// }



// try {
//     function add(x, y) {
//         return x / y;
//     }
// }
// catch (error) {
//     console.log("Error Found");
// } finally {
//     console.log("Finally Block");
// }
// let res = add(1, 0);
// console.log(res);



let arr = [1, 2, 3, 4, 5, 6];
try {
    console.log(arr[9]);
}catch(error){
    console.log("This is error");
    // console.log("error");
    // console.log(error);
    // console.log(arr);
}