const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());

const routes = require('./app/Routes/auth');

app.use('', routes)

//App listen
app.listen(3000, () => {
    console.log('JWT Example running....');
});
