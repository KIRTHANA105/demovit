const express = require('express'); // Fixed typo
const port = process.env.PORT || 8000;
const app = express();

app.use('/', function(req, res) {  // Fixed arrow function syntax
    return res.send("<h1>Hello World</h1>");
});

app.listen(port, function(err) {
    if (err) {
        return console.log('ERROR:', err);
    }
    console.log('Express Server is up and running on port', port);
});

