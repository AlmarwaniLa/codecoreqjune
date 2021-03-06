const express = require("express");
const router = express.Router();



router.get('/', (req, res, next) => {
    console.log(" you are in the clucks.js route ");
    next();
})


router.get("/new", (req, res) => {
    if (!res.locals.username) {
        res.redirect("/users/login");
    } else {
        res.render("clucks/new");
    }
});
router.post("/new", (req, res) => {
    req.body.username = res.locals.username;
    if (!res.locals.username) {
        res.redirect("/users/login");
    } else {
        queries.create(req.body).then(cluck => {
            console.log("cluck submitted. cluck returned: ", typeof cluck, cluck[0]);
            res.redirect(`./clucks`);
        });
    }
});


router.get("/", (req, res) => {
    console.log("you are in here index route section");
    queries.getAll().then(clucks => {
        console.log("all clucks:" + typeof clucks);
        res.render("./app.js", {
            clucks: clucks
        });
    })
});


module.exports = router;