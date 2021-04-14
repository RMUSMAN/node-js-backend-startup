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

var _default = express.Router().post('/', _auth.default, _controller.default.createGroup).get('/', _auth.default, _controller.default.getGroups).get('/:id', _auth.default, _controller.default.getGroup).patch('/:id', _auth.default, _controller.default.updateGroup);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlcnZlci9hcGkvY29udHJvbGxlcnMvZ3JvdXAvcm91dGVyLmpzIl0sIm5hbWVzIjpbImV4cHJlc3MiLCJSb3V0ZXIiLCJwb3N0IiwiYXV0aCIsImNvbnRyb2xsZXIiLCJjcmVhdGVHcm91cCIsImdldCIsImdldEdyb3VwcyIsImdldEdyb3VwIiwicGF0Y2giLCJ1cGRhdGVHcm91cCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7OztlQUNlQSxPQUFPLENBQ25CQyxNQURZLEdBRVpDLElBRlksQ0FFUCxHQUZPLEVBRUZDLGFBRkUsRUFFSUMsb0JBQVdDLFdBRmYsRUFHWkMsR0FIWSxDQUdSLEdBSFEsRUFHSEgsYUFIRyxFQUdHQyxvQkFBV0csU0FIZCxFQUlaRCxHQUpZLENBSVIsTUFKUSxFQUlBSCxhQUpBLEVBSU1DLG9CQUFXSSxRQUpqQixFQUtaQyxLQUxZLENBS04sTUFMTSxFQUtFTixhQUxGLEVBS1FDLG9CQUFXTSxXQUxuQixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBjb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcic7XG5pbXBvcnQgYXV0aCBmcm9tICcuLi8uLi9taWRkbGV3YXJlcy9hdXRoJztcbmV4cG9ydCBkZWZhdWx0IGV4cHJlc3NcbiAgLlJvdXRlcigpXG4gIC5wb3N0KCcvJywgYXV0aCwgY29udHJvbGxlci5jcmVhdGVHcm91cClcbiAgLmdldCgnLycsIGF1dGgsIGNvbnRyb2xsZXIuZ2V0R3JvdXBzKVxuICAuZ2V0KCcvOmlkJywgYXV0aCwgY29udHJvbGxlci5nZXRHcm91cClcbiAgLnBhdGNoKCcvOmlkJywgYXV0aCwgY29udHJvbGxlci51cGRhdGVHcm91cCk7XG4iXX0=