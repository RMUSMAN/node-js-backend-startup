"use strict";

var _user = _interopRequireDefault(require("../api/models/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable prettier/prettier */
const passport = require("passport");

const JwtStrategy = require('passport-jwt').Strategy;

const ExtractJwt = require('passport-jwt').ExtractJwt;

var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET;
passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
  _user.default.findOne({
    _id: jwt_payload.id
  }, function (err, user) {
    if (err) {
      return done(err, false);
    }

    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  });
}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9oZWxwZXJzL3Bhc3Nwb3J0LmpzIl0sIm5hbWVzIjpbInBhc3Nwb3J0IiwicmVxdWlyZSIsIkp3dFN0cmF0ZWd5IiwiU3RyYXRlZ3kiLCJFeHRyYWN0Snd0Iiwib3B0cyIsImp3dEZyb21SZXF1ZXN0IiwiZnJvbUF1dGhIZWFkZXJBc0JlYXJlclRva2VuIiwic2VjcmV0T3JLZXkiLCJwcm9jZXNzIiwiZW52IiwiU0VDUkVUIiwidXNlIiwiand0X3BheWxvYWQiLCJkb25lIiwiVXNlck1vZGFsIiwiZmluZE9uZSIsIl9pZCIsImlkIiwiZXJyIiwidXNlciJdLCJtYXBwaW5ncyI6Ijs7QUFJQTs7OztBQUpBO0FBQ0EsTUFBTUEsUUFBUSxHQUFHQyxPQUFPLENBQUMsVUFBRCxDQUF4Qjs7QUFDQSxNQUFNQyxXQUFXLEdBQUdELE9BQU8sQ0FBQyxjQUFELENBQVAsQ0FBd0JFLFFBQTVDOztBQUNBLE1BQU1DLFVBQVUsR0FBR0gsT0FBTyxDQUFDLGNBQUQsQ0FBUCxDQUF3QkcsVUFBM0M7O0FBRUEsSUFBSUMsSUFBSSxHQUFHLEVBQVg7QUFDQUEsSUFBSSxDQUFDQyxjQUFMLEdBQXNCRixVQUFVLENBQUNHLDJCQUFYLEVBQXRCO0FBQ0FGLElBQUksQ0FBQ0csV0FBTCxHQUFtQkMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLE1BQS9CO0FBQ0FYLFFBQVEsQ0FBQ1ksR0FBVCxDQUFhLElBQUlWLFdBQUosQ0FBZ0JHLElBQWhCLEVBQXNCLFVBQVVRLFdBQVYsRUFBdUJDLElBQXZCLEVBQTZCO0FBQzVEQyxnQkFBVUMsT0FBVixDQUFrQjtBQUFFQyxJQUFBQSxHQUFHLEVBQUVKLFdBQVcsQ0FBQ0s7QUFBbkIsR0FBbEIsRUFBMkMsVUFBVUMsR0FBVixFQUFlQyxJQUFmLEVBQXFCO0FBQzVELFFBQUlELEdBQUosRUFBUztBQUNMLGFBQU9MLElBQUksQ0FBQ0ssR0FBRCxFQUFNLEtBQU4sQ0FBWDtBQUNIOztBQUNELFFBQUlDLElBQUosRUFBVTtBQUNOLGFBQU9OLElBQUksQ0FBQyxJQUFELEVBQU9NLElBQVAsQ0FBWDtBQUNILEtBRkQsTUFFTztBQUNILGFBQU9OLElBQUksQ0FBQyxJQUFELEVBQU8sS0FBUCxDQUFYO0FBQ0g7QUFDSixHQVREO0FBVUgsQ0FYWSxDQUFiIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcHJldHRpZXIvcHJldHRpZXIgKi9cbmNvbnN0IHBhc3Nwb3J0ID0gcmVxdWlyZShcInBhc3Nwb3J0XCIpO1xuY29uc3QgSnd0U3RyYXRlZ3kgPSByZXF1aXJlKCdwYXNzcG9ydC1qd3QnKS5TdHJhdGVneVxuY29uc3QgRXh0cmFjdEp3dCA9IHJlcXVpcmUoJ3Bhc3Nwb3J0LWp3dCcpLkV4dHJhY3RKd3RcbmltcG9ydCBVc2VyTW9kYWwgZnJvbSAnLi4vYXBpL21vZGVscy91c2VyJztcbnZhciBvcHRzID0ge31cbm9wdHMuand0RnJvbVJlcXVlc3QgPSBFeHRyYWN0Snd0LmZyb21BdXRoSGVhZGVyQXNCZWFyZXJUb2tlbigpO1xub3B0cy5zZWNyZXRPcktleSA9IHByb2Nlc3MuZW52LlNFQ1JFVDtcbnBhc3Nwb3J0LnVzZShuZXcgSnd0U3RyYXRlZ3kob3B0cywgZnVuY3Rpb24gKGp3dF9wYXlsb2FkLCBkb25lKSB7XG4gICAgVXNlck1vZGFsLmZpbmRPbmUoeyBfaWQ6IGp3dF9wYXlsb2FkLmlkIH0sIGZ1bmN0aW9uIChlcnIsIHVzZXIpIHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgcmV0dXJuIGRvbmUoZXJyLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBkb25lKG51bGwsIHVzZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGRvbmUobnVsbCwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfSk7XG59KSk7XG4iXX0=