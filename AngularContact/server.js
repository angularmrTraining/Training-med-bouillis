var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require('mongoose'),
        _ = require('underscore'),
    methodOverride = require("method-override");
// configuration ===========================================
// get all data/stuff of the body (POST) parameters
var db = require('./config/db')();
mongoose.connect(db.url,db.options, function(err) {
        console.log(err ? err : 'Connected to Database');
});
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
 var models = ['Contact'];
        //Inject Models
        _.each(models,function(model){
            require('./server/models/'+model)(mongoose);
        })
        //Inject Routes
        _.each(models,function(model){
            try{
                require('./server/routes/'+model+'Route')(app);
            }
            catch(e){
                console.log(model+'Route.js : ',e);
            }
        })
        require('./server/routes/routes.js')(app);
        

        var router = express.Router();

        router.use(function(req, res, next) {
            next();
        });
// start app ===============================================
var port = 4000;
console.log("listening in port", port);
app.listen(port);
exports = module.exports = app;