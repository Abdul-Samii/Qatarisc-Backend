"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterUser = void 0;
const models_1 = require("../models");
const RegisterUser = async (req, res, next) => {
    console.log(req.body);
    const { name, email, address, phone, dp } = req.body;
    const createUser = await models_1.User.create({
        name: name,
        email: email,
        address: address,
        phone: phone,
        dp: dp
    });
    const result = await createUser.save();
    res.status(200).json(result);
};
exports.RegisterUser = RegisterUser;
//# sourceMappingURL=AuthController.js.map