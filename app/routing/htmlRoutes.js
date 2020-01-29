var path = require("path");

module.exports = function (app) {

    // html get request to the survey page
    app.get("/survey", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // html get to home page if anything entered other than survey
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};

