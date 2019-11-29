const express = require("express");
const app = express();
const fs = require("fs")
const db= require("../db/db.json")

module.exports = function(app) {
    
    app.get("/api/notes", function(req, res) {
          res.json()
          console.log(`Received a ${req.method} request from ${req.url}`);
        }
    );

    app.post("/api/notes", function(req, res) {
        console.log(`Received a ${req.method} request from ${req.url}`);
        res.json({ok: true});
        }
    );

    app.delete("api/notes", function(req, res) {
        console.log(`Received a ${req.method} request from ${req.url}`)
    });
}


