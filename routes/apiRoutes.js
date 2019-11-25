const notesData = require("../db/db.json");
const express = require("express");
const app = express();
const fs = require("fs")

module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
          res.json(notesData)
          console.log(`Received a ${req.method} request from ${req.url}`);
        }
    );

    app.post("/api/notes", function(req, res) {
        console.log(`Received a ${req.method} request from ${req.url}`);
        // console.log(req.body)
        // notesData.push(req.body);
        res.json({ok: true})
        }
    );

    app.delete("api/notes", function(req, res) {
        console.log(`Received a ${req.method} request from ${req.url}`)
    });
}


