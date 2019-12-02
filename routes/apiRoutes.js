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
            console.log(`Note ${thisNote.id} has been added to the db!`);
            res.sendFile(path.join(__dirname, "../public/notes.html"));
        });
    }
    );

    app.delete("/api/notes/:id", function (req, res) {
        let selectedForDelete = req.params.id
        const updatedNotes = notesData.filter(note => note.id !== selectedForDelete)

        fs.writeFile('./db/db.json', JSON.stringify(updatedNotes), (err) => {
            if (err) throw err;
            console.log(`Note ${selectedForDelete} was deleted!!`);
            res.json({ ok: true })
        }
        );

    })
}




