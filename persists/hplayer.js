const mongoose = require("mongoose");

const hockeyPlayersSchema = mongoose.Schema({
    name: { type: String, default: "" },
    age: { type: Number, min: 18 },
    position: { type: String, default: "" },
    team: { type: String, default: "Free Agent" },

});

const Players = mongoose.model("Players", hockeyPlayersSchema);

module.exports = Players;