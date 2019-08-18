// pull in the linked routes to our dummy data arrays
var friends = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    var match = {
      name: "",
      photo: "",
      fDifference: 1000
    };

    var userData = req.body;
    var userScores = userData.scores;
    var absoluteDiff = 0;

    for (var i = 0; i < friends.length; i++) {
      absoluteDiff = 0;

      for (var j = 0; j < userScores.length; j++) {
        absoluteDiff += Math.abs(
          parseInt(friends[i].scores[j]) - parseInt(userScores[j])
        );
      }

      if (absoluteDiff <= match.fDifference) {
        match.fDifference = absoluteDiff;
        match.name = friends[i].name;
        match.photo = friends[i].photo;
      }
    }

    friends.push(userData);

    res.json(match);
  });
};
