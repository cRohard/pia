// //Install express server
const express = require('express');
const path = require('path');

// const app = express();

// // Serve only the static files form the dist directory
// app.use(express.static(__dirname + '/app/dist'));

// app.get('/*', function(req,res) {
    
// res.sendFile(path.join(__dirname+'/app/dist/index.html'));
// });

// // Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 8086);

// HTTP module
var http = require('http');

// Authentication module.
var auth = require('http-auth');
var basic = auth.basic({
	realm: "Simon Area.",
	file: "users.htpasswd" // gevorg:gpass, Sarah:testpass
});

// Creating new HTTP server.
http.createServer(basic, (req, res) => {
	res.end(`Welcome to private area - ${req.user}!`);
}).listen(1337, () => {
	// Log URL.
	console.log("Server running at http://127.0.0.1:1337/");
});