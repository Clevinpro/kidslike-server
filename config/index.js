const dbUser = 'clv';
const dbPassword = 'MKKFjYOJFSAdTsTl';

const serverURL = 'http://localhost';
const port = 8080;

const config = {
  secret: 'key123',
  port,
  databaseUrl: `mongodb+srv://${dbUser}:${dbPassword}@cluster0-mskwo.mongodb.net/kidslike?retryWrites=true&w=majority`,
  GOOGLE_CONFIG: {
    clientID: '298901202358-vemf3ql96nar8jffeo89emtpsccbosaq.apps.googleusercontent.com',
    clientSecret: 'GwgJcWmjC9em3LENmSHOfWWR',
    // make sure the call back url matches what was set on Twitter
    // when registering the app
    callbackURL: `${serverURL}:${port}/api/google/callback`,
    serverURL,
  }
};

module.exports = config;
