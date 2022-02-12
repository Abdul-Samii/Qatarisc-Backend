import express from 'express';
import { App } from './services';


const StartServer = async() =>{
    const app = express();
    await App(app);

    app.listen(9000,()=>{
        console.clear();
        console.log("Hello World");
    })
}

StartServer();