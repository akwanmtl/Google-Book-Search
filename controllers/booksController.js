const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Book
      .find(req.query)
      .sort({ date: -1 })
      .then(result => {
        res.json(result)
      })
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Book
      .find({ googleID: req.body.googleID })
      .then(data =>{
        if(data.length === 0){
          db.Book
          .create(req.body)
          .then(result => {
            req.io.emit("new-book", result.title + "has been saved!");
            res.json(result)
          })
        }
        else{
          req.io.emit("new-book", req.body.title + " is already saved!");
          res.json(data)
        }
        
      })
      .catch(err => {
        console.log(err)
        res.status(422).json(err)
      });
  },
  remove: function(req, res) {
    db.Book
      .findOne({ googleID: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(result => res.json(result))
      .catch(err => res.status(422).json(err));
  }
};