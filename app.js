//const express = require('express');
//const app = express();
//const logger = require('morgan');
const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const path = require('path');
const connect = require('connect');
const methodOverride = require('method-override');
const clucksRouter = require('./routes/clucks');
const indexRouter = require('./routes/index');
const app = express();
const { response } = require('express');
const { get } = require("jquery");

app.set("view engine", "ejs");
app.use(logger("dev"));


app.use(logger("dev"));
app.use(express.urlencoded({
    extended: true
}));
app.use(cookieParser());

app.use(
    methodOverride((req, res) => {
        if (req.body && req.body._method) {
            const method = req.body._method;
            return method;
        }
    })
);

app.use(express.static(path.join(__dirname, 'public')));


app.get((request, response, next) => {
    response.locals.username = "app.js";
    const username = request.cookies.username;
    if (username) {
        response.locals.username = username;
    }
    next();
});



const PORT = 3000;
const ADDRESS = "localhost";
app.listen(PORT, ADDRESS, () => {
    console.log(`Server listening on http://${ADDRESS}:${PORT}`);
});
module.exports = app;