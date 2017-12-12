var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override");
// configuration ===========================================
// get all data/stuff of the body (POST) parameters

app.use(bodyParser.json()); // parse application/json
app.use(
    bodyParser.json({
        type: "application/vnd.api+json"
    })
); // parse application/vnd.api+json as json
app.use(
    bodyParser.urlencoded({
        extended: true
    })
); // parse application/x-www-form-urlencoded
app.use(methodOverride("X-HTTP-Method-Override")); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + "/src")); // set the static files location /public/img will be /img for users
var router = express.Router();
router.use(function(req, res, next) {
    next();
});
// start app ===============================================
var port = 3001;
console.log("listening in port", port);
app.listen(port);
exports = module.exports = app;