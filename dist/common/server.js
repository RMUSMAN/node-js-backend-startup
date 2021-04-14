"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var path = _interopRequireWildcard(require("path"));

var bodyParser = _interopRequireWildcard(require("body-parser"));

var http = _interopRequireWildcard(require("http"));

var os = _interopRequireWildcard(require("os"));

var _cors = _interopRequireDefault(require("cors"));

var _logger = _interopRequireDefault(require("./logger"));

var OpenApiValidator = _interopRequireWildcard(require("express-openapi-validator"));

var _error = _interopRequireDefault(require("../api/middlewares/error.handler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const mongoose = require('mongoose');

const passport = require('passport');

const app = new _express.default();
const options = {
  keepAlive: 1,
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
};

class ExpressServer {
  constructor() {
    const root = path.normalize(`${__dirname}/../..`);
    const apiSpec = path.join(__dirname, 'api.yml');
    const validateResponses = !!(process.env.OPENAPI_ENABLE_RESPONSE_VALIDATION && process.env.OPENAPI_ENABLE_RESPONSE_VALIDATION.toLowerCase() === 'true');
    app.use((0, _cors.default)());
    app.use(passport.initialize());
    Promise.resolve().then(() => _interopRequireWildcard(require('.././helpers/passport')));
    app.set('appPath', `${root}client`);
    app.use(bodyParser.json({
      limit: process.env.REQUEST_LIMIT || '100kb'
    }));
    app.use(bodyParser.urlencoded({
      extended: true,
      limit: process.env.REQUEST_LIMIT || '100kb'
    }));
    app.use(bodyParser.text({
      limit: process.env.REQUEST_LIMIT || '100kb'
    }));
    app.use((0, _cookieParser.default)(process.env.SESSION_SECRET));
    app.use(_express.default.static(`${root}/public`));
    mongoose.connect(process.env.MONGO_DB_URL, options);
    mongoose.connection.on('connected', function () {
      console.log('DB Connected');
    });
    app.use(process.env.OPENAPI_SPEC || '/spec', _express.default.static(apiSpec));
    app.use(OpenApiValidator.middleware({
      apiSpec,
      validateResponses,
      ignorePaths: /.*\/spec(\/|$)/
    }));
  }

  router(routes) {
    routes(app);
    app.use(_error.default);
    return this;
  }

  listen(port = process.env.PORT) {
    const welcome = p => () => _logger.default.info(`up and running in ${process.env.NODE_ENV || 'development'} @: ${os.hostname()} on port: ${p}}`);

    http.createServer(app).listen(port, welcome(port));
    return app;
  }

}

exports.default = ExpressServer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9jb21tb24vc2VydmVyLmpzIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVxdWlyZSIsInBhc3Nwb3J0IiwiYXBwIiwiRXhwcmVzcyIsIm9wdGlvbnMiLCJrZWVwQWxpdmUiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VDcmVhdGVJbmRleCIsIkV4cHJlc3NTZXJ2ZXIiLCJjb25zdHJ1Y3RvciIsInJvb3QiLCJwYXRoIiwibm9ybWFsaXplIiwiX19kaXJuYW1lIiwiYXBpU3BlYyIsImpvaW4iLCJ2YWxpZGF0ZVJlc3BvbnNlcyIsInByb2Nlc3MiLCJlbnYiLCJPUEVOQVBJX0VOQUJMRV9SRVNQT05TRV9WQUxJREFUSU9OIiwidG9Mb3dlckNhc2UiLCJ1c2UiLCJpbml0aWFsaXplIiwic2V0IiwiYm9keVBhcnNlciIsImpzb24iLCJsaW1pdCIsIlJFUVVFU1RfTElNSVQiLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJ0ZXh0IiwiU0VTU0lPTl9TRUNSRVQiLCJzdGF0aWMiLCJjb25uZWN0IiwiTU9OR09fREJfVVJMIiwiY29ubmVjdGlvbiIsIm9uIiwiY29uc29sZSIsImxvZyIsIk9QRU5BUElfU1BFQyIsIk9wZW5BcGlWYWxpZGF0b3IiLCJtaWRkbGV3YXJlIiwiaWdub3JlUGF0aHMiLCJyb3V0ZXIiLCJyb3V0ZXMiLCJlcnJvckhhbmRsZXIiLCJsaXN0ZW4iLCJwb3J0IiwiUE9SVCIsIndlbGNvbWUiLCJwIiwibCIsImluZm8iLCJOT0RFX0VOViIsIm9zIiwiaG9zdG5hbWUiLCJodHRwIiwiY3JlYXRlU2VydmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBVkEsTUFBTUEsUUFBUSxHQUFHQyxPQUFPLENBQUMsVUFBRCxDQUF4Qjs7QUFNQSxNQUFNQyxRQUFRLEdBQUdELE9BQU8sQ0FB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QUosQ0FBUXdCLGNBQVI7QUFDQSxXQUFPLElBQVA7QUFDRDs7QUFFREMsRUFBQUEsTUFBTSxDQUFDQyxJQUFJLEdBQUc5QixPQUFPLENBQUNDLEdBQVIsQ0FBWThCLElBQXBCLEVBQTBCO0FBQzlCLFVBQU1DLE9BQU8sR0FBSUMsQ0FBRCxJQUFPLE1BQ3JCQyxnQkFBRUMsSUFBRixDQUNHLHFCQUNDbkMsT0FBTyxDQUFDQyxHQUFSLENBQVltQyxRQUFaLElBQXdCLGFBQ3pCLE9BQU1DLEVBQUUsQ0FBQ0MsUUFBSCxFQUFjLGFBQVlMLENBQUUsR0FIckMsQ0FERjs7QUFPQU0sSUFBQUEsSUFBSSxDQUFDQyxZQUFMLENBQWtCeEQsR0FBbEIsRUFBdUI2QyxNQUF2QixDQUE4QkMsSUFBOUIsRUFBb0NFLE9BQU8sQ0FBQ0YsSUFBRCxDQUEzQztBQUVBLFdBQU85QyxHQUFQO0FBQ0Q7O0FBdkRnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpO1xuaW1wb3J0IGNvb2tpZVBhcnNlciBmcm9tICdjb29raWUtcGFyc2VyJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgKiBhcyBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJztcbmltcG9ydCAqIGFzIGh0dHAgZnJvbSAnaHR0cCc7XG5pbXBvcnQgKiBhcyBvcyBmcm9tICdvcyc7XG5jb25zdCBwYXNzcG9ydCA9IHJlcXVpcmUoJ3Bhc3Nwb3J0Jyk7XG5pbXBvcnQgY29ycyBmcm9tICdjb3JzJztcbmltcG9ydCBsIGZyb20gJy4vbG9nZ2VyJztcbmltcG9ydCAqIGFzIE9wZW5BcGlWYWxpZGF0b3IgZnJvbSAnZXhwcmVzcy1vcGVuYXBpLXZhbGlkYXRvcic7XG5pbXBvcnQgZXJyb3JIYW5kbGVyIGZyb20gJy4uL2FwaS9taWRkbGV3YXJlcy9lcnJvci5oYW5kbGVyJztcblxuY29uc3QgYXBwID0gbmV3IEV4cHJlc3MoKTtcbmNvbnN0IG9wdGlvbnMgPSB7XG4gIGtlZXBBbGl2ZTogMSxcbiAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxuICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gIHVzZUNyZWF0ZUluZGV4OiB0cnVlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwcmVzc1NlcnZlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHJvb3QgPSBwYXRoLm5vcm1hbGl6ZShgJHtfX2Rpcm5hbWV9Ly4uLy4uYCk7XG5cbiAgICBjb25zdCBhcGlTcGVjID0gcGF0aC5qb2luKF9fZGlybmFtZSwgJ2FwaS55bWwnKTtcbiAgICBjb25zdCB2YWxpZGF0ZVJlc3BvbnNlcyA9ICEhKFxuICAgICAgcHJvY2Vzcy5lbnYuT1BFTkFQSV9FTkFCTEVfUkVTUE9OU0VfVkFMSURBVElPTiAmJlxuICAgICAgcHJvY2Vzcy5lbnYuT1BFTkFQSV9FTkFCTEVfUkVTUE9OU0VfVkFMSURBVElPTi50b0xvd2VyQ2FzZSgpID09PSAndHJ1ZSdcbiAgICApO1xuICAgIGFwcC51c2UoY29ycygpKTtcbiAgICBhcHAudXNlKHBhc3Nwb3J0LmluaXRpYWxpemUoKSk7XG4gICAgaW1wb3J0KCcuLi8uL2hlbHBlcnMvcGFzc3BvcnQnKTtcblxuICAgIGFwcC5zZXQoJ2FwcFBhdGgnLCBgJHtyb290fWNsaWVudGApO1xuICAgIGFwcC51c2UoYm9keVBhcnNlci5qc29uKHsgbGltaXQ6IHByb2Nlc3MuZW52LlJFUVVFU1RfTElNSVQgfHwgJzEwMGtiJyB9KSk7XG4gICAgYXBwLnVzZShcbiAgICAgIGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7XG4gICAgICAgIGV4dGVuZGVkOiB0cnVlLFxuICAgICAgICBsaW1pdDogcHJvY2Vzcy5lbnYuUkVRVUVTVF9MSU1JVCB8fCAnMTAwa2InLFxuICAgICAgfSlcbiAgICApO1xuICAgIGFwcC51c2UoYm9keVBhcnNlci50ZXh0KHsgbGltaXQ6IHByb2Nlc3MuZW52LlJFUVVFU1RfTElNSVQgfHwgJzEwMGtiJyB9KSk7XG4gICAgYXBwLnVzZShjb29raWVQYXJzZXIocHJvY2Vzcy5lbnYuU0VTU0lPTl9TRUNSRVQpKTtcbiAgICBhcHAudXNlKEV4cHJlc3Muc3RhdGljKGAke3Jvb3R9L3B1YmxpY2ApKTtcbiAgICBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPX0RCX1VSTCwgb3B0aW9ucyk7XG4gICAgbW9uZ29vc2UuY29ubmVjdGlvbi5vbignY29ubmVjdGVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgY29uc29sZS5sb2coJ0RCIENvbm5lY3RlZCcpO1xuICAgIH0pO1xuICAgIGFwcC51c2UocHJvY2Vzcy5lbnYuT1BFTkFQSV9TUEVDIHx8ICcvc3BlYycsIEV4cHJlc3Muc3RhdGljKGFwaVNwZWMpKTtcbiAgICBhcHAudXNlKFxuICAgICAgT3BlbkFwaVZhbGlkYXRvci5taWRkbGV3YXJlKHtcbiAgICAgICAgYXBpU3BlYyxcbiAgICAgICAgdmFsaWRhdGVSZXNwb25zZXMsXG4gICAgICAgIGlnbm9yZVBhdGhzOiAvLipcXC9zcGVjKFxcL3wkKS8sXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICByb3V0ZXIocm91dGVzKSB7XG4gICAgcm91dGVzKGFwcCk7XG4gICAgYXBwLnVzZShlcnJvckhhbmRsZXIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbGlzdGVuKHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUKSB7XG4gICAgY29uc3Qgd2VsY29tZSA9IChwKSA9PiAoKSA9PlxuICAgICAgbC5pbmZvKFxuICAgICAgICBgdXAgYW5kIHJ1bm5pbmcgaW4gJHtcbiAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViB8fCAnZGV2ZWxvcG1lbnQnXG4gICAgICAgIH0gQDogJHtvcy5ob3N0bmFtZSgpfSBvbiBwb3J0OiAke3B9fWBcbiAgICAgICk7XG5cbiAgICBodHRwLmNyZWF0ZVNlcnZlcihhcHApLmxpc3Rlbihwb3J0LCB3ZWxjb21lKHBvcnQpKTtcblxuICAgIHJldHVybiBhcHA7XG4gIH1cbn1cbiJdfQ==