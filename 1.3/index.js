const crypto = require("crypto");

const randomString = crypto.randomBytes(16).toString("hex");

console.log("Application started");

setInterval(() => {
    const timestamp = new Date().toISOString();
    console.log(`${timestamp}: ${randomString}`);
}, 5000);