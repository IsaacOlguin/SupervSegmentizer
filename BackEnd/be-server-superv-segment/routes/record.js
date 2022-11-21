const express = require("express");

const recordRoutes = express.Router();

const dbo = require("../db/connection_db");

const ObjectId = require("mongodb").ObjectId;


recordRoutes.route("/listUsers").get(async function(req, res){
    const dbConnect = dbo.getDB("test");

    dbConnect.collection("users").find({}).toArray(function(err, result) {
        if(err) throw err;

        res.json(result);
    });
});