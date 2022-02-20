"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const services_1 = require("./services");
const passportSetup = require("./Strategy/passport");
const Database_1 = require("./services/Database");
const port = process.env.PORT || 9000;
const StartServer = async () => {
    const app = (0, express_1.default)();
    await (0, Database_1.default)();
    await (0, services_1.App)(app);
    app.listen(port, () => {
        console.clear();
        console.log(`Hello World ${port}`);
    });
};
StartServer();
//# sourceMappingURL=index.js.map