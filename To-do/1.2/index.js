// Reads {PORT} from environment
// start a web server

const http = require("http");

const PORT = process.env.PORT || 3000;
const MESSAGE = process.env.MESSAGE || "Todo App is running";

const server = http.createServer((req, res) => {
    if (req.url == "/" && req.method == "GET") {
        res.writeHead(200, { "Content-Type": "text/html"});
        res.end(`
            <html>
                <head><title>Todo App</title></head>
                <body>
                    <h1>${MESSAGE}</h1>
                    <p>Server is running on port ${PORT}</p>
                </body>
            </html>
        `);
    } else {
        res.writeHead(404);
        res.end("Not Found");
    }
});

server.listen(PORT, () => {
    console.log(`Server started in port ${PORT}`);
});