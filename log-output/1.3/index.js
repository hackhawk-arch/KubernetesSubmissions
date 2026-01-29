const http = require("http");
const crypto = require("crypto");

const PORT = process.env.PORT || 3000;
const randomString = crypto.randomBytes(16).toString("hex");

console.log("Application started");

setInterval(() => {
    const timestamp = new Date().toISOString();
    console.log(`${timestamp}: ${randomString}`);
}, 5000);

const server = http.createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
        const timestamp = new Date().toISOString();
        res.end(
            JSON.stringify({
                timestamp,
                randomString,
            })
        );
    } else {
        res.writeHeadf(404);
        res.end("Not Found");
    }
});

server.listen(PORT, () => {
    console.log(`HTTP server running on port ${PORT}`);
});