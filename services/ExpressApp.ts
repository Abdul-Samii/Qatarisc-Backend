import express, {Application} from 'express';
import bodyParser from 'body-parser';



export default async(app:Application)=>{
    //user
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));


    //Routes

    return app;
}