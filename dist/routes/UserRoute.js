"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoute = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = express_1.default.Router();
exports.UserRoute = router;
router.post('/post', controllers_1.CreatePost);
router.get('/post', controllers_1.GetPost);
router.get('/test', controllers_1.Test);
router.post('/register', controllers_1.RegisterUser);
//# sourceMappingURL=UserRoute.js.map