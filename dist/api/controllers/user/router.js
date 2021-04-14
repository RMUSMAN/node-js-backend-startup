"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var express = _interopRequireWildcard(require("express"));

var _controller = _interopRequireDefault(require("./controller"));

var _auth = _interopRequireDefault(require("../../middlewares/auth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = express.Router().get('/', _auth.default, _controller.default.getUsers).post('/', _auth.default, _controller.default.createUser).patch('/setupAccount', _controller.default.setupAccount).patch('/:id', _auth.default, _controller.default.updateUser).post('/updateProfile', _auth.default, _controller.default.updateProfile).post('/changePassword', _controller.default.changePassword).get('/:id', _controller.default.getUser);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlcnZlci9hcGkvY29udHJvbGxlcnMvdXNlci9yb3V0ZXIuanMiXSwibmFtZXMiOlsiZXhwcmVzcyIsIlJvdXRlciIsImdldCIsImF1dGgiLCJjb250cm9sbGVyIiwiZ2V0VXNlcnMiLCJwb3N0IiwiY3JlYXRlVXNlciIsInBhdGNoIiwic2V0dXBBY2NvdW50IiwidXBkYXRlVXNlciIsInVwZGF0ZVByb2ZpbGUiLCJjaGFuZ2VQYXNzd29yZCIsImdldFVzZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7ZUFFZUEsT0FBTyxDQUNuQkMsTUFEWSxHQUVaQyxHQUZZLENBRVIsR0FGUSxFQUVIQyxhQUZHLEVBRUdDLG9CQUFXQyxRQUZkLEVBR1pDLElBSFksQ0FHUCxHQUhPLEVBR0ZILGFBSEUsRUFHSUMsb0JBQVdHLFVBSGYsRUFJWkMsS0FKWSxDQUlOLGVBSk0sRUFJV0osb0JBQVdLLFlBSnRCLEVBS1pELEtBTFksQ0FLTixNQUxNLEVBS0VMLGFBTEYsRUFLUUMsb0JBQVdNLFVBTG5CLEVBTVpKLElBTlksQ0FNUCxnQkFOTyxFQU1XSCxhQU5YLEVBTWlCQyxvQkFBV08sYUFONUIsRUFPWkwsSUFQWSxDQU9QLGlCQVBPLEVBT1lGLG9CQUFXUSxjQVB2QixFQVFaVixHQVJZLENBUVIsTUFSUSxFQVFBRSxvQkFBV1MsT0FSWCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBjb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcic7XG5pbXBvcnQgYXV0aCBmcm9tICcuLi8uLi9taWRkbGV3YXJlcy9hdXRoJztcblxuZXhwb3J0IGRlZmF1bHQgZXhwcmVzc1xuICAuUm91dGVyKClcbiAgLmdldCgnLycsIGF1dGgsIGNvbnRyb2xsZXIuZ2V0VXNlcnMpXG4gIC5wb3N0KCcvJywgYXV0aCwgY29udHJvbGxlci5jcmVhdGVVc2VyKVxuICAucGF0Y2goJy9zZXR1cEFjY291bnQnLCBjb250cm9sbGVyLnNldHVwQWNjb3VudClcbiAgLnBhdGNoKCcvOmlkJywgYXV0aCwgY29udHJvbGxlci51cGRhdGVVc2VyKVxuICAucG9zdCgnL3VwZGF0ZVByb2ZpbGUnLCBhdXRoLCBjb250cm9sbGVyLnVwZGF0ZVByb2ZpbGUpXG4gIC5wb3N0KCcvY2hhbmdlUGFzc3dvcmQnLCBjb250cm9sbGVyLmNoYW5nZVBhc3N3b3JkKVxuICAuZ2V0KCcvOmlkJywgY29udHJvbGxlci5nZXRVc2VyKTtcbiJdfQ==