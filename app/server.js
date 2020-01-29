// DEPENDENCIES
var express = require("express");
var path = require("path");

// SETS UP EXPRESS
var app = express();
var PORT = process.env.PORT || 3000;

// EXPRESS DATA PARSING CAPABILITIES
app.use(express.static('app/public'));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// ROUTER
require(path.join(__dirname, "/routing/apiRoutes"))(app);
require(path.join(__dirname, "/routing/htmlRoutes"))(app);

// LISTENER
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});