// Reads {PORT} from environment
// start a web server

const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end("Todo app server");
});

server.listen(PORT, () => {
    console.log(`Server started in port ${PORT}`);
});