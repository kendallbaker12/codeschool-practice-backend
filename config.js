const dotenv = require("dotenv");

const flags = require("flags");
flags.defineNumber("port", 3000, "ports for the http server to listen to.");
flags.parse();
const port = flags.get("port") || process.env.PORT || 3000;

module.exports = {
    port: port,
};