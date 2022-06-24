const mongoose = require("mongoose");

const db = mongoose.connection;

function connect(user, password, host, port, db) {
    const connectionString = `mongodb+srv://codeschool:codeschool@codeschool-backend-prac.qikyt2n.mongodb.net/?retryWrites=true&w=majority`;

    mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

function setUpConnectionHandlers(callback) {
    //connecting
    db.once("connecting", () => {
        console.log("connecting to CodeSchool Mongo db");
    });
    //connected
    db.once("connected", () => {
        console.log("Connected to CodeSchool Mongo db");
    });
    //opening
    db.once("open", () => {
        console.log("Open Connection to Mongo db");
        callback();
    });
    //errors
    db.once("error", () => {
        console.log("Error Connecting to Mongodb");
    });
}

//exporting functions
module.exports = {
    connect: connect,
    setUpConnectionHandlers: setUpConnectionHandlers
};