var friends = require('../data/friends');

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });
    app.post("/api/friends", function (req, res) {
        var newUser = req.body;

        var scoreDifference = 0;

        //cycle through friends array and through each survey answer to get score difference per friend
        //post that difference to each friends totalScore
        for (k = 0; k < friends.length; k++) {
            scoreDifference = 0;
            for (i = 0; i < newUser.friendScores.length; i++) {
                scoreDifference += Math.abs(friends[k].scores[i] - newUser.friendScores[i]);
                friends[k].totalScore = scoreDifference;
            }
        }
        //compare each friends total score to arrive at lowest total score - start with first friend
        //in array

        var lowestScore = friends[0].totalScore;
        for (m = 1; m < friends.length; m++) {
            if (friends[m].totalScore < lowestScore) {
                lowestScore = friends[m].totalScore;
            }
        }
        //cycle through friends array to match lowest score to the specific friend total score
        var bestMatch = {};

        for (q = 0; q < friends.length; q++) {
            if (friends[q].totalScore == lowestScore) {
                bestMatch = friends[q]
            }
        }

        res.send(bestMatch)
        //reset totalScore for all friends to zero
        for (a = 0; a < friends.length; a++) {
            friends[a].totalScore = 0;
        }

    });
  };

