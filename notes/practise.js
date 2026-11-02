// use the "GET" to fetch the data from jason file and send it to the browser to
// display the data in the browser.
// require express module

// const exp = require('express');
// const server = exp.createServere((req,res)=>{
//     if( req.method === 'GET'){
//         res.end("Hello Jason");
//     }

// });

// server.listen(3000,()=>{
    
//     console.log("Server runing on port 3000");
// });

const exp = require('express');
const student = require("./Student.Jason");
const app = exp();
app.get("/",(req,res)=>{
    res.jason({
        message: "Student data",
        data: student,
    });
});

app.listen(3000,()=>{
    
    console.log("Server runing on port 3000");
});