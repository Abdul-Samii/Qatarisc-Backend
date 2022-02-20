const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");
const FACEBOOK_APP_ID = "665715394476591";
const FACEBOOK_APP_SECRET = "42f2f5f5aed09e60a0064b977a8cab95";
passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "/auth/facebook/callback",
}, function (accessToken, refreshToken, profile, done) {
    done(null, profile);
}));
passport.serializeUser((user, done) => {
    done(null, user);
});
passport.deserializeUser((user, done) => {
    done(null, user);
});
//# sourceMappingURL=passport.js.map