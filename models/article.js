const {Schema, model} = require('mongoose');

const articleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String
    },
    data: {
        type: String
    },
    categoryID: {
        type: String,
        required: true
    },
    authorID: {
        type: String,
        required: true
    }
})

module.exports = model('Article', articleSchema);

module.exports.getAllArticles = (callback) => {
    const article = model('Article', articleSchema);
    article.find({}, callback);
}

module.exports.getAllArticlesForAuthUser = (id, callback) => {
    const article = model('Article', articleSchema);
    article.find({authorID: id}, callback);
}