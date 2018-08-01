// Dependencies
const express = require("express");
const bodyParser = require("body-parser");

// Sets up Express App
const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Router
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// Listener
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});

