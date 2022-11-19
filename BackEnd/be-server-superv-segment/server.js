const express = require("express");
const cors = require("cors");
const app = express();

const PORT_BE_APP = 8080;

app.use(cors());

app.use("/login", (req, res) => {
    console.log("/login");

    res.send({
        token: "test_token"
    });
});

app.listen(PORT_BE_APP, () => console.log("API Backend SupervSegmentizer is running on port " + PORT_BE_APP))