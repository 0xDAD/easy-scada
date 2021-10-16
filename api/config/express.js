const express = require('express'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    passport = require('passport');

module.exports = function (app, config) {
    app.set('view engine', 'html');
    app.use(logger(config.loggerFormat));

    app.use(express.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
    app.use(express.json()); // parse application/json

    /// ?
    app.use(session({ secret: 'what is secret??', resave: false, saveUninitialized: false }));
    app.use(cookieParser());
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(express.static(config.rootPath + '/public'))
}
