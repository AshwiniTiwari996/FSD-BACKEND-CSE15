// function sum(){
//     console.log("2");
// }
// function example(){
//     console.log("1");
//     sum();
//     console.log("3");
// }
// example();


// const promise = new Promise ((resolve, reject) =>{
//     setTimeout(() => {
//         resolve("found data");
//     },2000);
// });

// promise.then((result) => {
//     console.log(result);
// });

// const promise = new Promise ((resolve, reject) =>{
//     setTimeout(() => {
//         reject("data not found something went wrong");
//     },2000);
// });

// promise.then((result) => {
//     console.log(result);
// })
// .catch((error) => {
//     console.log(error);
// });

// const http = require("http");
// const servere = http.createServer((req,res) => {
//     if(res.method = "GET" && req.url === "/"){
//         res.end("Home Page");
//     }
//     else if(res.method = "GET" && req.url === "/about"){
//         res.end("About Page");
//     }
//     else{
//         res.statusCode = 404;
//         res.end("Page not found")
//     }
// });

// servere.listen(3000,()=>{
    
//     console.log("Server runing on port 3000");
// });


const http = require("http");
const servere = http.createServer((req,res) => {
    if(res.method = "GET" && req.url === "/"){
        res.end("Home Page");
    }
    else if(res.method = "GET" && req.url === "/about"){
        res.end("About Page");
    }
    else{
        res.statusCode = 404;
        res.end("Page not found")
    }
});

servere.listen(3000,()=>{
    
    console.log("Server runing on port 3000");
});