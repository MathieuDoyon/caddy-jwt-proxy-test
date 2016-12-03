// Load the http module to create an http server.
var http = require('http');
// sign with default (HMAC SHA256)
var jwt = require('jsonwebtoken');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
    var token = jwt.sign({
        sub: "1234567890",
        name: "John Doe",
        role: "admin"
    }, process.env.JWT_SECRET, {
        expiresIn: '2 days'
    });
    var tokenAssistant = jwt.sign({
            sub: "1234567890",
            name: "John Doe",
            role: "assistant"
        }, process.env.JWT_SECRET, {
            expiresIn: '2 days'
        });

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end(
        "Dashboard: \n"
        + "\nkey secret: " + process.env.JWT_SECRET
        + "\nadmin: " + token
        + "\nassistant: " + tokenAssistant
    );
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");
