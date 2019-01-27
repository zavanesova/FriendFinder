var friendsData = require("../data/friends");
var path = require("path");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        return res.json(friendsData);
    });
    app.post("/api/friends", function(req, res) {
        friendsData.push(req.body);
        res.json(friendsData);
    });
}