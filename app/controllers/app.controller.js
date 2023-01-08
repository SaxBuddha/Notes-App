//Contains CRUD functionality for the app.

const { response } = require("express");
const appModel = require("../model/app.model.js");
const App = require("../model/app.model.js");

// CREATE NOTE
exports.create = (req, res) => {

  const note = new App({
    note: req.body.note,
  });   
    note
    .save()
    .then((data) => {
      res.send(data)
    }) 
  
  // input
  //   .save()
  //   .then((data) => {
  //     res.send(data);
  //   })
    .catch((err) => {
      res.status(500).send({
        note:
          err.note || "Error.",
      });
    });
};

// READ ALL NOTES
exports.findAll = (req, res) => {
  App.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        note:
          err.note || "Error.",
      });
    });
};

// RETRIEVE SINGLE NOTE WITH noteID
exports.findOne = (req, res) => {
  App.findById(req.params.noteId)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          note: "Note not found with id " + req.params.noteId,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          note: "Note not found with id " + req.params.noteId,
        });
      }
      return res.status(500).send({
        note: "Error retrieving note with id " + req.params.noteId,
      });
    });
};


// SEARCH FUNCTIONALITY
exports.search = (req, res) => {
  App.find(
    {
      "$or":[
        {note:{$regex:req.params.key}}
      ]
    })      
  .then((data) => {
    if (!data) {
      return res.status(404).send({
        note: "Note not found with search query: " + req.params.key,
      });
    }
    res.send(data);
  })
//   .catch((err) => {
//     if (err.kind === "ObjectId") {
//       return res.status(404).send({
//         note: "Note not found with query " + req.params.key,
//       });
//     }
//     return res.status(500).send({
//       note: "Error retrieving note with query " + req.params.key,
//     });
//   });  
}

// UPDATE NOTE
exports.update = (req, res) => {
  App.findByIdAndUpdate(
    req.params.noteId,
    {
      note: req.body.note,
    },
    { new: true }
  )
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          note: "Note not found with id " + req.params.noteId,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          note: "Note not found with id " + req.params.noteId,
        });
      }
      return res.status(500).send({
        note: "Error updating note with id " + req.params.noteId,
      });
    });
};

// DELETE NOTE
exports.delete = (req, res) => {
  App.findByIdAndRemove(req.params.noteId)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          note: "Note not found with id " + req.params.noteId,
        });
      }
      res.send({ note: "Note deleted" });
    })    
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          note: "Note not found with id " + req.params.noteId,
        });
      }
      return res.status(500).send({
        note: "Could not delete note with id " + req.params.noteId,
      });
    });
}
