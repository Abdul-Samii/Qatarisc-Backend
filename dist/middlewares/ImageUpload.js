"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadImage = void 0;
const express_1 = require("express");
const multer_1 = require("multer");
const router = express_1.default.Router();
const baseURL = String.raw `D:\Qatar Project\Backend\images\'`;
const imageStorage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'images');
    },
    filename: function (req, file, cb) {
        cb(null, baseURL + Date.now() + "_" + file.originalname);
    }
});
exports.uploadImage = (0, multer_1.default)({ storage: imageStorage }).array('images', 10);
//# sourceMappingURL=ImageUpload.js.map