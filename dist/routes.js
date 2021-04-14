"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = routes;

var _router = _interopRequireDefault(require("./api/controllers/examples/router"));

var _router2 = _interopRequireDefault(require("./api/controllers/auth/router"));

var _router3 = _interopRequireDefault(require("./api/controllers/user/router"));

var _router4 = _interopRequireDefault(require("./api/controllers/site/router"));

var _router5 = _interopRequireDefault(require("./api/controllers/group/router"));

var _router6 = _interopRequireDefault(require("./api/controllers/task/router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function routes(app) {
  app.use('/api/v1/examples', _router.default);
  app.use('/api/v1/auth', _router2.default);
  app.use('/api/v1/users', _router3.default);
  app.use('/api/v1/sites', _router4.default);
  app.use('/api/v1/groups', _router5.default);
  app.use('/api/v1/tasks', _router6.default);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NlcnZlci9yb3V0ZXMuanMiXSwibmFtZXMiOlsicm91dGVzIiwiYXBwIiwidXNlIiwiZXhhbXBsZXNSb3V0ZXIiLCJhdXRoUm91dGVyIiwidXNlclJvdXRlciIsInNpdGVSb3V0ZXIiLCJncm91cFJvdXRlciIsInRhc2tSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVlLFNBQVNBLE1BQVQsQ0FBZ0JDLEdBQWhCLEVBQXFCO0FBQ2xDQSxFQUFBQSxHQUFHLENBQUNDLEdBQUosQ0FBUSxrQkFBUixFQUE0QkMsZUFBNUI7QUFDQUYsRUFBQUEsR0FBRyxDQUFDQyxHQUFKLENBQVEsY0FBUixFQUF3QkUsZ0JBQXhCO0FBQ0FILEVBQUFBLEdBQUcsQ0FBQ0MsR0FBSixDQUFRLGVBQVIsRUFBeUJHLGdCQUF6QjtBQUNBSixFQUFBQSxHQUFHLENBQUNDLEdBQUosQ0FBUSxlQUFSLEVBQXlCSSxnQkFBekI7QUFDQUwsRUFBQUEsR0FBRyxDQUFDQyxHQUFKLENBQVEsZ0JBQVIsRUFBMEJLLGdCQUExQjtBQUNBTixFQUFBQSxHQUFHLENBQUNDLEdBQUosQ0FBUSxlQUFSLEVBQXlCTSxnQkFBekI7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleGFtcGxlc1JvdXRlciBmcm9tICcuL2FwaS9jb250cm9sbGVycy9leGFtcGxlcy9yb3V0ZXInO1xuaW1wb3J0IGF1dGhSb3V0ZXIgZnJvbSAnLi9hcGkvY29udHJvbGxlcnMvYXV0aC9yb3V0ZXInO1xuaW1wb3J0IHVzZXJSb3V0ZXIgZnJvbSAnLi9hcGkvY29udHJvbGxlcnMvdXNlci9yb3V0ZXInO1xuaW1wb3J0IHNpdGVSb3V0ZXIgZnJvbSAnLi9hcGkvY29udHJvbGxlcnMvc2l0ZS9yb3V0ZXInO1xuaW1wb3J0IGdyb3VwUm91dGVyIGZyb20gJy4vYXBpL2NvbnRyb2xsZXJzL2dyb3VwL3JvdXRlcic7XG5pbXBvcnQgdGFza1JvdXRlciBmcm9tICcuL2FwaS9jb250cm9sbGVycy90YXNrL3JvdXRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJvdXRlcyhhcHApIHtcbiAgYXBwLnVzZSgnL2FwaS92MS9leGFtcGxlcycsIGV4YW1wbGVzUm91dGVyKTtcbiAgYXBwLnVzZSgnL2FwaS92MS9hdXRoJywgYXV0aFJvdXRlcik7XG4gIGFwcC51c2UoJy9hcGkvdjEvdXNlcnMnLCB1c2VyUm91dGVyKTtcbiAgYXBwLnVzZSgnL2FwaS92MS9zaXRlcycsIHNpdGVSb3V0ZXIpO1xuICBhcHAudXNlKCcvYXBpL3YxL2dyb3VwcycsIGdyb3VwUm91dGVyKTtcbiAgYXBwLnVzZSgnL2FwaS92MS90YXNrcycsIHRhc2tSb3V0ZXIpO1xufVxuIl19