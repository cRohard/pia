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

// Authentication module.
var auth = require('http-auth');
var basic = auth.basic({
    realm: "Simon Area.",
    file: __dirname + "/../data/users.htpasswd"
});
 
// Application setup.
const app = express();
app.use(auth.connect(basic));
 
// Setup route.
app.get('/', (req, res) => {
    res.send(`Hello from express - ${req.user}!`);
});