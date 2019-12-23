const dbUser = 'clv';
const dbPassword = 'MKKFjYOJFSAdTsTl';

const server = window.location.origin;
const serverURL =
      window.location.hostname.indexOf('localhost') !== -1 || location.hostname === "127.0.0.1"
        ? `http://localhost:${config.port}`
        : server;

const config = {
  secret: 'key123',
  port: 8080,
  databaseUrl: `mongodb+srv://${dbUser}:${dbPassword}@cluster0-mskwo.mongodb.net/kidslike?retryWrites=true&w=majority`,
  GOOGLE_CONFIG: {
    clientID: '298901202358-vemf3ql96nar8jffeo89emtpsccbosaq.apps.googleusercontent.com',
    clientSecret: 'GwgJcWmjC9em3LENmSHOfWWR',
    // make sure the call back url matches what was set on Twitter
    // when registering the app
    callbackURL: `${serverURL}/api/google/callback`
  }
};

module.exports = config;
