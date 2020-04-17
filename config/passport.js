const config = require('./db');
const User = require('../models/user');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

module.exports = (passport) => {
    let opts = {}
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = config.secret;
    passport.use(new JwtStrategy(opts, (payload, done) => {
        User.findOne({id: payload.sub}, (err, user) => {
            if(err) return done(err, false);
            if(user) return done(null, user);
            else return done(null, false);
        });
    }));
}