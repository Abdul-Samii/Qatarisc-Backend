import express from 'express';
import { App } from './services';
const passportSetup = require("./Strategy/passport");
import dbConnection from './services/Database';

const StartServer = async() =>{
    const app = express();
    await dbConnection();
    await App(app);

    app.listen(9000,()=>{
        console.clear();
        console.log("Hello World");
    })
}

StartServer();