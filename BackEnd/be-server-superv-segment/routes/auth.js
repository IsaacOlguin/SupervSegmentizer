const express = require("express");

const authRoutes = express.Router();

const dbo = require("../db/connection_db");

const ObjectId = require("mongodb").ObjectId;

authRoutes.route("/login").post((req, res) => {
    console.log("/login");
    console.log(req.body);

    res.send({
        token: "test_token"
    });
});

module.exports = authRoutes;