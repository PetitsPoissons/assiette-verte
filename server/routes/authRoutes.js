const passport = require('passport');

module.exports = (app) => {
  // pass user off to passport when they hit that endpoint so they are getting passed on to the authentication flow
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    })
  );

  // route handler once user is sent back to callback route, with the google code
  app.get('/auth/google/callback', passport.authenticate('google'));
};
