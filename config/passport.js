const User = require('../src/domain/db/schemas/user');
const domain = require('../src/domain');
const { OAuth2Strategy: GoogleStrategy } = require('passport-google-oauth');
const config = require('./index');

const initializePassport = passport => {
  // allows us to save the user into the session
  passport.serializeUser((user, cb) => cb(null, user))
  passport.deserializeUser((obj, cb) => cb(null, obj))
  passport.use(new GoogleStrategy(config.GOOGLE_CONFIG,
    function(accessToken, refreshToken, profile, done) {
        console.log('profile', profile)
        const user = { 
          name: profile.displayName,
          photo: profile.photos[0].value.replace(/_normal/, ''),
          email: profile.emails[0].value,
          googleId: profile.id,
        };
         User.findOne({ googleId: profile.id },  function (err, findUser) {
           console.log('findUser :', findUser);
           if(!findUser) {
             return domain.userAPI.createUser(user)
              .then(user => done(null, user))
              .catch(err => done(err))
           }
           console.log('user google :', findUser);
           return done(err, findUser);
         });
    }
    ));
}

module.exports = initializePassport;
