"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    address: {
        type: String,
    },
    age: {
        type: Number
    },
    dp: {
        type: String,
    },
    phone: {
        type: Number
    }
}, {
    timestamps: true
});
const User = mongoose_1.default.model('user', UserSchema);
exports.User = User;
//# sourceMappingURL=UserModel.js.map