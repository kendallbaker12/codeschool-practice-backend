const express = require("express");
const app = express();

app.use(express.json());

const Players = require("./persists/hplayer");

app.post("/players", (req, res) => {
    const vPlayers = req.body;
    Players.create(vPlayers)
        .then((player) => {
            res.json(player);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});

app.get("/players/:id", (req, res) => {
    const id = req.params.id;
    Players.findById(id)
        .then((player) => {
            res.json(player);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});

app.get("/players", (req, res) => {
    Players.find()
        .then((players) => {
            res.json(players);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});


module.exports = app;