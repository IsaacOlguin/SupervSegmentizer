const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config({ path: "./config.env"});

const PORT_BE_APP = process.env.SERVER_PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));

const dbo = require("./db/connection_db");

//const recordRoutes = express.Router();

/*
app.use("/login", (req, res) => {
    console.log("/login");

    res.send({
        token: "test_token"
    });
});
*/

app.listen(PORT_BE_APP, () => {
    dbo.connectToServer(function(err) {
        if (err) console.error(err);
    });

    console.log("API Backend SupervSegmentizer is running on port " + PORT_BE_APP)
})