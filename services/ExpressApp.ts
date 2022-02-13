import express, {Application} from 'express';
import bodyParser from 'body-parser';
import { Strategy } from 'passport-facebook';
import passport from 'passport';
import session from 'express-session';
import { AuthRoute, PostRoute } from '../routes';


export default async(app:Application)=>{
    //user
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    
// Authentication configuration
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'bla bla bla' 
  }));
    app.use(passport.initialize());
    app.use(passport.session());


    app.use('/Auth',AuthRoute);
    app.use('/post',PostRoute);




    //Routes

    return app;
}