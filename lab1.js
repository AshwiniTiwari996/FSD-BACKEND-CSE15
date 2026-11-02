// const http = require('http');

// const PORT = 8000;

// const server = http.createServer((req, res) => {
//     if (req.method === 'GET') {
//         res.writeHead(200, { 'Content-Type': 'text/plain' });
//         res.end('Hello World');
//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/plain' });
//         res.end('Not Found');
//     }
// });

// server.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}/`);
// });
const http = require("http");

const server = http.createServer((req, res) => {

    if (req.url == "/") {
        res.write("Welcome Home");
        res.end();
    }

    else if (req.url == "/about") {
        res.write("About Page");
        res.end();
    }

    else {
        res.write("Page Not Found");
        res.end();
    }

});

server.listen(8000);

console.log("Server started on port 8000");