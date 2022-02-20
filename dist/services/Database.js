"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const config_1 = require("../config");
exports.default = async () => {
    try {
        mongoose_1.default.connect(config_1.MONGO_URI).then(result => {
            console.log("Connected!");
        }).catch(err => console.log("Error ", err));
    }
    catch (err) {
        console.log(err);
    }
};
//# sourceMappingURL=Database.js.map