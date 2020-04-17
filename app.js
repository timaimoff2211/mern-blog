const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/db');
const account = require('./routes/account.route');
const articles = require('./routes/articles.route');
const users = require('./routes/user.route');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/account', account);

app.use('/user', users);

app.use('/articles', articles);



async function start() {
    try {
        await mongoose.connect(config.dbName, { 
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false 
        });
        app.listen(3001, () => console.log('App has beed started on port: 3001...'));
    } catch (e) {
        console.log('Не удалось подключиться к БД', e.message);
        process.exit(1);
    }
}

start();
