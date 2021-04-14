"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

//import { authenticate } from 'passport';
const passport = require('passport');

var _default = (req, res, next) => {
  passport.authenticate('jwt', {
    session: false
  }, function (err, user) {
    if (err) return next(err);
    if (!user) return res.status(401).json({
      message: 'Unauthorized Access - No Token Provided!'
    });
    req.user = user;
    next();
  })(req, res, next);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9hcGkvbWlkZGxld2FyZXMvYXV0aC5qcyJdLCJuYW1lcyI6WyJwYXNzcG9ydCIsInJlcXVpcmUiLCJyZXEiLCJyZXMiLCJuZXh0IiwiYXV0aGVudGljYXRlIiwic2Vzc2lvbiIsImVyciIsInVzZXIiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0EsTUFBTUEsUUFBUSxHQUFHQyxPQUFPLENBQUMsVUFBRCxDQUF4Qjs7ZUFDZSxDQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBV0MsSUFBWCxLQUFvQjtBQUNqQ0osRUFBQUEsUUFBUSxDQUFDSyxZQUFULENBQXNCLEtBQXRCLEVBQTZCO0FBQUVDLElBQUFBLE9BQU8sRUFBRTtBQUFYLEdBQTdCLEVBQWlELFVBQVVDLEdBQVYsRUFBZUMsSUFBZixFQUFxQjtBQUNwRSxRQUFJRCxHQUFKLEVBQVMsT0FBT0gsSUFBSSxDQUFDRyxHQUFELENBQVg7QUFDVCxRQUFJLENBQUNDLElBQUwsRUFDRSxPQUFPTCxHQUFHLENBQ1BNLE1BREksQ0FDRyxHQURILEVBRUpDLElBRkksQ0FFQztBQUFFQyxNQUFBQSxPQUFPLEVBQUU7QUFBWCxLQUZELENBQVA7QUFHRlQsSUFBQUEsR0FBRyxDQUFDTSxJQUFKLEdBQVdBLElBQVg7QUFDQUosSUFBQUEsSUFBSTtBQUNMLEdBUkQsRUFRR0YsR0FSSCxFQVFRQyxHQVJSLEVBUWFDLElBUmI7QUFTRCxDIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgeyBhdXRoZW50aWNhdGUgfSBmcm9tICdwYXNzcG9ydCc7XG5jb25zdCBwYXNzcG9ydCA9IHJlcXVpcmUoJ3Bhc3Nwb3J0Jyk7XG5leHBvcnQgZGVmYXVsdCAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgcGFzc3BvcnQuYXV0aGVudGljYXRlKCdqd3QnLCB7IHNlc3Npb246IGZhbHNlIH0sIGZ1bmN0aW9uIChlcnIsIHVzZXIpIHtcbiAgICBpZiAoZXJyKSByZXR1cm4gbmV4dChlcnIpO1xuICAgIGlmICghdXNlcilcbiAgICAgIHJldHVybiByZXNcbiAgICAgICAgLnN0YXR1cyg0MDEpXG4gICAgICAgIC5qc29uKHsgbWVzc2FnZTogJ1VuYXV0aG9yaXplZCBBY2Nlc3MgLSBObyBUb2tlbiBQcm92aWRlZCEnIH0pO1xuICAgIHJlcS51c2VyID0gdXNlcjtcbiAgICBuZXh0KCk7XG4gIH0pKHJlcSwgcmVzLCBuZXh0KTtcbn07XG4iXX0=