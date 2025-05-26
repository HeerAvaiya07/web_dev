const http = require('http');
const hostName = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end("Hello ice Tea");
    } else if (req.url === '/ice-tea') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end("Thanks for this awesome ice tea");
    } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end("404 Not Found");
    }
})

server.listen(port, hostName, () => {
    console.log(`Server is listing at http://${hostName}:${port}`);
})