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
      .create(req.body)
      .then(result => res.json(result))
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