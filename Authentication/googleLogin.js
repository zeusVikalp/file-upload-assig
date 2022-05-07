const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth2').Strategy;

passport.serializeUser(function(user,done){
    done(null,user)
})

passport.deserializeUser(function(user,done){
    done(null,user)
})

passport.use(new GoogleStrategy ({
    clientID: "47249630732-dqr3hlrflg8rhanr5l7g4dnqasubuovk.apps.googleusercontent.com",
    clientSecret : "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",
    callbackURL: "http://localhost:9008/google/callback",
    passReqToCallback : true

},
    function(request, accessToken, refreshToken, profile , done){
        return done(null, profile);
    }
));