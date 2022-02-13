import express, {Application} from 'express';
import bodyParser from 'body-parser';
import { Strategy } from 'passport-facebook';
import passport from 'passport';
import session from 'express-session';


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


    
passport.serializeUser(function (user, cb) {
    cb(null, user);
});

// passport.deserializeUser(function (obj, cb) {
//     cb(null, obj);
// });

    passport.use(new Strategy({
        clientID: '665715394476591',
        clientSecret:'42f2f5f5aed09e60a0064b977a8cab95',
        callbackURL :'http://localhost:9000/fb/auth',
        profileFields: ['id','displayName']
    },
        function (accessToken, refreshToken, profile, done){
            console.log(accessToken, refreshToken, profile);
            const user = profile;
            done(null,user);
        }
    ));
    app.use('/failed/login',(req,res,next)=>{
        res.send('login Failed');
    })
    app.use('/login/fb',passport.authenticate('facebook'));
    app.use('/fb/auth',passport.authenticate('facebook',
        {failureRedirect:'/failed/login'},(req,res,next)=>{
            console.log(req.user)
            res.send('logged into facebook');
        }
    ))

    //Routes

    return app;
}