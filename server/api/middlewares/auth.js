//import { authenticate } from 'passport';
const passport = require('passport');
export default (req, res, next) => {
  passport.authenticate('jwt', { session: false }, function (err, user) {
    if (err) return next(err);
    if (!user)
      return res
        .status(401)
        .json({ message: 'Unauthorized Access - No Token Provided!' });
    req.user = user;
    next();
  })(req, res, next);
};
