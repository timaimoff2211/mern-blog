const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const config = require('../config/db');
const Article = require('../models/article');
const User = require('../models/user');

// POST add article to articles collection 
router.post('/add', (req, res) => {
    const newArt = new Article({
        title: req.body.title,
        text: req.body.text,
        data: req.body.data,
        categoryID: req.body.catId,
        authorID: req.body.authorId
    });

    newArt.save((err, article) => {
        if(err) res.json({success: false, msg: 'Что пошло не так'});

        User.getUserById(req.body.authorId, (err, author) => {
            if(err) throw err;

            res.json({
                success: true,
                msg: 'Статья была опубликована',
                article,
                author
            });
        });
    });
});

// GET all articles from articles collection
router.get('/get-all', (req, res) => {
    Article.getAllArticles(async (err, arts) => {
        if(err) res.json({success: false, msg: 'Не удалось получить все статьи...'});
        res.json(arts); 
    });
});

// GET all articles of uthenticate user
router.get('/get/:id', (req, res) => {
    const userId = req.params.id;
    Article.getAllArticlesForAuthUser( userId, (err, arts) => {
        if(err) res.json({success: false, msg: 'Не удалось получить все статьи...'});
        res.json(arts);
    });
});

module.exports = router;