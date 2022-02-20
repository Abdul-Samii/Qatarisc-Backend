"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPost = exports.Test = exports.CreatePost = void 0;
const models_1 = require("../models");
const CreatePost = async (req, res, next) => {
    const { users, text, time, images, comments, commenter } = req.body;
    const createPost = await models_1.Post.create({
        users: users,
        text: text,
        images: images,
        time: time,
        comments: comments,
        commenter: commenter
    });
    const result = await createPost.save();
    res.status(200).json(result);
};
exports.CreatePost = CreatePost;
const Test = async (req, res, next) => {
    res.send("Working");
};
exports.Test = Test;
const GetPost = async (req, res, next) => {
    const posts = await models_1.Post.find().populate("users");
    if (posts !== null) {
        return res.status(200).json(posts);
    }
    return res.status(400).json({ "message": "No Posts Availible" });
    return res.status(400).json({ "message": "Posts information not found" });
};
exports.GetPost = GetPost;
//# sourceMappingURL=UserController.js.map