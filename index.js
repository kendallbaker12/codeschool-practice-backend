const mongodb = require("./persists/mongo");

const app = require("./server");

const config = require("./config");

mongodb.setUpConnectionHandlers(() => {
    app.listen(config.port, () => {
        console.log(`Server is running on port ${config.port}`);
    });
});
mongodb.connect();