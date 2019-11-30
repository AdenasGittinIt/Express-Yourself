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
        let thisNote = req.body
        notesData.push(thisNote)
        fs.writeFile('./db/db.json', JSON.stringify(notesData), (err) => {
            if (err) throw err;
            console.log('The note was appended to file!');
          });
        }
    );

    app.delete("api/notes", function(req, res) {
        console.log(`Received a ${req.method} request from ${req.url}`)
    });
}


