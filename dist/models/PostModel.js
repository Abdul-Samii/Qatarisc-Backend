"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const mongoose_1 = require("mongoose");
const PostSchema = new mongoose_1.Schema({
    users: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'user',
        }],
    text: {
        type: String,
        required: true
    },
    images: {
        type: [String],
    },
    likes: [{
            type: mongoose_1.default.SchemaTypes.ObjectId,
            ref: 'users'
        }],
    comments: {
        type: [String]
    },
    commenter: [{
            type: mongoose_1.default.SchemaTypes.ObjectId,
            ref: 'users'
        }],
}, {
    timestamps: true
});
const Post = mongoose_1.default.model('post', PostSchema);
exports.Post = Post;
//# sourceMappingURL=PostModel.js.map