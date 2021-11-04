const passport = require("passport");

module.exports = app =>{
    app.get('/auth/google', passport.authenticate('google',{
        scope : ['profile','email']
    }));

    app.get('/auth/google/callback', passport.authenticate(('google')));
};

//mongodb+srv://user1:<password>@emaily.ivtey.mongodb.net/myFirstDatabase?retryWrites=true&w=majority