const express       = require('express')
const bodyParser    = require('body-parser');
const app           = express()
const port          = 3000

app.get('/', (req, res) => {
    res.send("Welcome to the Noob API");
});

app.get('/test', (req, res) => {
    var response = {
        "success": true,
        "message": "Welcome to Mars"
    }
    res.json(response);
});

app.listen(port, function() {
    console.log("Listening to " + port);
});