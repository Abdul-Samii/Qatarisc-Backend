"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const body_parser_1 = require("body-parser");
const passport_1 = require("passport");
const express_session_1 = require("express-session");
const routes_1 = require("../routes");
const cors_1 = require("cors");
const path_1 = require("path");
exports.default = async (app) => {
    app.use((0, cors_1.default)());
    app.use(body_parser_1.default.json());
    app.use(body_parser_1.default.urlencoded({ extended: true }));
    app.use('/images', express_1.default.static(path_1.default.join(__dirname, 'images')));
    app.use((0, express_session_1.default)({
        resave: false,
        saveUninitialized: true,
        secret: 'bla bla bla'
    }));
    app.use(passport_1.default.initialize());
    app.use(passport_1.default.session());
    app.use('/Auth', routes_1.AuthRoute);
    app.use('/user', routes_1.UserRoute);
    return app;
};
//# sourceMappingURL=ExpressApp.js.map