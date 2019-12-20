const dbUser = 'clv';
const dbPassword = 'MKKFjYOJFSAdTsTl';

const config = {
  secret: 'key123',
  port: 8080,
  databaseUrl: `mongodb+srv://${dbUser}:${dbPassword}@cluster0-mskwo.mongodb.net/kidslike?retryWrites=true&w=majority`,
  GOOGLE_CONFIG: {
    clientID: '298901202358-vemf3ql96nar8jffeo89emtpsccbosaq.apps.googleusercontent.com',
    clientSecret: 'GwgJcWmjC9em3LENmSHOfWWR',
    // make sure the call back url matches what was set on Twitter
    // when registering the app
    callbackURL: 'http://127.0.0.1:8080/api/google/callback'
  }
};

module.exports = config;
