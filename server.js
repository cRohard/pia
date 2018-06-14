//Install express server
const express = require('express');
const path = require('path');

const app = express();

var basicAuth = require('basic-auth-connect');
app.use(basicAuth('username', 'password'));

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/app/dist'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/app/dist/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8086);
