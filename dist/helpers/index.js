"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "decodeToken", {
  enumerable: true,
  get: function () {
    return _common.decodeToken;
  }
});
Object.defineProperty(exports, "generateJwt", {
  enumerable: true,
  get: function () {
    return _common.generateJwt;
  }
});
Object.defineProperty(exports, "generateInviteLink", {
  enumerable: true,
  get: function () {
    return _common.generateInviteLink;
  }
});
Object.defineProperty(exports, "decodeInviteToken", {
  enumerable: true,
  get: function () {
    return _common.decodeInviteToken;
  }
});
Object.defineProperty(exports, "verifyGoogleToken", {
  enumerable: true,
  get: function () {
    return _common.verifyGoogleToken;
  }
});
exports.Constants = exports.EmailHelpers = void 0;

var EmailHelpers = _interopRequireWildcard(require("./emails"));

exports.EmailHelpers = EmailHelpers;

var _common = require("./common");

var Constants = _interopRequireWildcard(require("./constants"));

exports.Constants = Constants;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9oZWxwZXJzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQU9BIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgRW1haWxIZWxwZXJzIGZyb20gJy4vZW1haWxzJztcbmltcG9ydCB7XG4gIGRlY29kZVRva2VuLFxuICBnZW5lcmF0ZUp3dCxcbiAgZ2VuZXJhdGVJbnZpdGVMaW5rLFxuICBkZWNvZGVJbnZpdGVUb2tlbixcbiAgdmVyaWZ5R29vZ2xlVG9rZW4sXG59IGZyb20gJy4vY29tbW9uJztcbmltcG9ydCAqIGFzIENvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50cyc7XG5leHBvcnQge1xuICBFbWFpbEhlbHBlcnMsXG4gIGRlY29kZVRva2VuLFxuICBnZW5lcmF0ZUp3dCxcbiAgZ2VuZXJhdGVJbnZpdGVMaW5rLFxuICBDb25zdGFudHMsXG4gIGRlY29kZUludml0ZVRva2VuLFxuICB2ZXJpZnlHb29nbGVUb2tlbixcbn07XG4iXX0=