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

var _default = express.Router().post('/', _auth.default, _controller.default.createTask).get('/', _auth.default, _controller.default.getTasks).get('/:id', _auth.default, _controller.default.getTask).patch('/:id', _auth.default, _controller.default.updateTask);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlcnZlci9hcGkvY29udHJvbGxlcnMvdGFzay9yb3V0ZXIuanMiXSwibmFtZXMiOlsiZXhwcmVzcyIsIlJvdXRlciIsInBvc3QiLCJhdXRoIiwiY29udHJvbGxlciIsImNyZWF0ZVRhc2siLCJnZXQiLCJnZXRUYXNrcyIsImdldFRhc2siLCJwYXRjaCIsInVwZGF0ZVRhc2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7ZUFDZUEsT0FBTyxDQUNuQkMsTUFEWSxHQUVaQyxJQUZZLENBRVAsR0FGTyxFQUVGQyxhQUZFLEVBRUlDLG9CQUFXQyxVQUZmLEVBR1pDLEdBSFksQ0FHUixHQUhRLEVBR0hILGFBSEcsRUFHR0Msb0JBQVdHLFFBSGQsRUFJWkQsR0FKWSxDQUlSLE1BSlEsRUFJQUgsYUFKQSxFQUlNQyxvQkFBV0ksT0FKakIsRUFLWkMsS0FMWSxDQUtOLE1BTE0sRUFLRU4sYUFMRixFQUtRQyxvQkFBV00sVUFMbkIsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgY29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXInO1xuaW1wb3J0IGF1dGggZnJvbSAnLi4vLi4vbWlkZGxld2FyZXMvYXV0aCc7XG5leHBvcnQgZGVmYXVsdCBleHByZXNzXG4gIC5Sb3V0ZXIoKVxuICAucG9zdCgnLycsIGF1dGgsIGNvbnRyb2xsZXIuY3JlYXRlVGFzaylcbiAgLmdldCgnLycsIGF1dGgsIGNvbnRyb2xsZXIuZ2V0VGFza3MpXG4gIC5nZXQoJy86aWQnLCBhdXRoLCBjb250cm9sbGVyLmdldFRhc2spXG4gIC5wYXRjaCgnLzppZCcsIGF1dGgsIGNvbnRyb2xsZXIudXBkYXRlVGFzayk7XG4iXX0=