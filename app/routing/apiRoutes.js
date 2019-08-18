// pull in the linked routes to our dummy data arrays
var friends = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    const match = {
      name: "",
      photo: "",
      fDifference: 1000
    };

    const userData = req.body;
    const userScores = userData.scores;
    const absoluteDiff = 0;

    for (var i = 0; i < friendsData.length; i++) {
      absoluteDiff = 0;

      for (var j = 0; j < userScores.length; j++) {
        absoluteDiff += Math.abs(
          parseInt(friendsData[i].scores[j]) - parseInt(userScores[j])
        );
      }

      if (absoluteDiff <= match.fDifference) {
        match.fDifference = absoluteDiff;
        match.name = friendsData[i].name;
        match.photo = friendsData[i].photo;
      }
    }

    friendsData.push(userData);

    res.json(match);
  });
};
