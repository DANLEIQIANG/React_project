const passport = require("passport");


module.exports = app =>{
    app.get('/auth/google', passport.authenticate('google',{
        scope : ['profile','email']
    }));

    app.get('/auth/google/callback', passport.authenticate(('google')));

    app.get('/api/logout', (req, res) =>{
        req.logout();
        res.send(req.user);
    });

    app.get('/api/current_user',(req, res) => {
        res.send(req.user);
    })
};

//mongodb+srv://user1:<password>@emaily.ivtey.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

//qHYy6OAFKhfOQbh5
//mongodb+srv://myuser:qHYy6OAFKhfOQbh5@cluster0.r4ywc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

//id
//460484816545-h126tbk8dh4b7t67spgieaknk62r3od3.apps.googleusercontent.com
//secret
//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