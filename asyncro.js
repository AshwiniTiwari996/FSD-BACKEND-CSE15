// function sum(){
//     console.log("20");
// }
// function example(){
//     console.log("1")
//     sum();
//     console.log("3")
// }
// example();
// write a node js program to create a basic http server that handles different url routes
// the server should
// // display "home page" when the user visits
// display about page when the user visits about
// return a 404 status code and dispaly page not found for any invalid url
// provide a link to return to the home page on the 404 page
// run the server om port 3000

const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Home Page</h1>");
    }
    else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>About Page</h1>");
    }
    else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end(`
            <h1>Page Not Found</h1>
            <a href="/">Return to Home Page</a>
        `);
    }
});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
