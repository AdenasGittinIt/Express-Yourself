const notesData = require("../db/db.json");
const express = require("express");
const app = express();
const fs = require("fs")
const path = require("path");
require("./htmlRoutes")(app);


module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        res.json(notesData)
        console.log(`Received a ${req.method} request from ${req.url}`)
    }
    );

    app.post("/api/notes", function (req, res) {
        console.log(`Received a ${req.method} request from ${req.url}`);
        let thisNote = req.body
        notesData.push(thisNote)
        fs.writeFile('./db/db.json', JSON.stringify(notesData), (err) => {
            if (err) throw err;
            console.log('The note was appended to file!');
            res.sendFile(path.join(__dirname, "../public/notes.html"));
        });
    }
    );

    app.delete("/api/notes/:id", function (req, res) {
        let deleteThisNote = req.params.id
        console.log(`I want to delete ${deleteThisNote}`);

        for (let i = 0; i < notesData.length; i++) {
            if (deleteThisNote.id === notesData.id) {
                notesData.splice(i-1, 1)
            }
        }
        res.sendFile(path.join(__dirname, "../public/notes.html"))

    })
}




