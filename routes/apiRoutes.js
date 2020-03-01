const noteData = require("../db/db.json");
const fs = require("fs");

module.exports = app => {
  app.get("/api/notes", (req, res) => {
    res.json(noteData);
  });

  app.post("/api/notes", (req, res) => {
    noteData.push(req.body);

    noteData.forEach((note, index) => {
      note.id = index + 1;
    });

    fs.writeFile("./db/db.json", JSON.stringify(noteData), err => {
      if (err) throw err;
    });
    res.json(true);
  });

  app.delete("/api/notes/:id", (req, res) => {
    const id = req.params.id;
    let idx;

    for (let i in noteData) {
      if (id == noteData[i].id) {
        idx = i;
        noteData.splice(idx, 1);
      }
    }

    fs.writeFile("./db/db.json", JSON.stringify(noteData), err => {
      if (err) throw err;
    });
    res.json(true);
  });
};
