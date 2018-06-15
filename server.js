// //Install express server
const express = require('express');
const path = require('path');
var auth = require('http-auth');

const app = express();


var basic = auth.basic({
    realm: "Simon Area.",
    file: "users.htpasswd"
});

app.use(auth.connect(basic));

// Serve only the static files form the dist directory

app.use(express.static(__dirname + '/app/dist'));

app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname+'/app/dist/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8086);
