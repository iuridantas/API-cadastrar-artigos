const mongooose = require('mongoose');

const articlesSchema = new mongooose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  link: { type: String, required: true },
});

const articles = mongooose.model('articles',articlesSchema,);

module.exports = articles;