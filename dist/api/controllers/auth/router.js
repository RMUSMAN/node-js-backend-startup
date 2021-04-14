"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var express = _interopRequireWildcard(require("express"));

var _controller = _interopRequireDefault(require("./controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = express.Router().post('/signUp', _controller.default.signUp).patch('/verifyAccount', _controller.default.verify).post('/signIn', _controller.default.signIn).post('/forgotPassword', _controller.default.forgotPassword).post('/resend', _controller.default.resend).patch('/resetPassword', _controller.default.resetPassword).post('/facebookLogin', _controller.default.facebookSignIn).post('/googleLogin', _controller.default.googleSignIn);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlcnZlci9hcGkvY29udHJvbGxlcnMvYXV0aC9yb3V0ZXIuanMiXSwibmFtZXMiOlsiZXhwcmVzcyIsIlJvdXRlciIsInBvc3QiLCJjb250cm9sbGVyIiwic2lnblVwIiwicGF0Y2giLCJ2ZXJpZnkiLCJzaWduSW4iLCJmb3Jnb3RQYXNzd29yZCIsInJlc2VuZCIsInJlc2V0UGFzc3dvcmQiLCJmYWNlYm9va1NpZ25JbiIsImdvb2dsZVNpZ25JbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7OztlQUVlQSxPQUFPLENBQ25CQyxNQURZLEdBRVpDLElBRlksQ0FFUCxTQUZPLEVBRUlDLG9CQUFXQyxNQUZmLEVBR1pDLEtBSFksQ0FHTixnQkFITSxFQUdZRixvQkFBV0csTUFIdkIsRUFJWkosSUFKWSxDQUlQLFNBSk8sRUFJSUMsb0JBQVdJLE1BSmYsRUFLWkwsSUFMWSxDQUtQLGlCQUxPLEVBS1lDLG9CQUFXSyxjQUx2QixFQU1aTixJQU5ZLENBTVAsU0FOTyxFQU1JQyxvQkFBV00sTUFOZixFQU9aSixLQVBZLENBT04sZ0JBUE0sRUFPWUYsb0JBQVdPLGFBUHZCLEVBUVpSLElBUlksQ0FRUCxnQkFSTyxFQVFXQyxvQkFBV1EsY0FSdEIsRUFTWlQsSUFUWSxDQVNQLGNBVE8sRUFTU0Msb0JBQVdTLFlBVHBCLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZXhwcmVzc1xuICAuUm91dGVyKClcbiAgLnBvc3QoJy9zaWduVXAnLCBjb250cm9sbGVyLnNpZ25VcClcbiAgLnBhdGNoKCcvdmVyaWZ5QWNjb3VudCcsIGNvbnRyb2xsZXIudmVyaWZ5KVxuICAucG9zdCgnL3NpZ25JbicsIGNvbnRyb2xsZXIuc2lnbkluKVxuICAucG9zdCgnL2ZvcmdvdFBhc3N3b3JkJywgY29udHJvbGxlci5mb3Jnb3RQYXNzd29yZClcbiAgLnBvc3QoJy9yZXNlbmQnLCBjb250cm9sbGVyLnJlc2VuZClcbiAgLnBhdGNoKCcvcmVzZXRQYXNzd29yZCcsIGNvbnRyb2xsZXIucmVzZXRQYXNzd29yZClcbiAgLnBvc3QoJy9mYWNlYm9va0xvZ2luJywgY29udHJvbGxlci5mYWNlYm9va1NpZ25JbilcbiAgLnBvc3QoJy9nb29nbGVMb2dpbicsIGNvbnRyb2xsZXIuZ29vZ2xlU2lnbkluKTtcbiJdfQ==