"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const mongoose = require('mongoose');

const siteSchema = new mongoose.Schema({
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    ref: 'User'
  },
  name: {
    type: String,
    required: false
  },
  logo: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  deleted: {
    type: Boolean,
    required: false,
    default: false
  }
}, {
  timestamps: true
});

var _default = mongoose.model('Site', siteSchema);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9hcGkvbW9kZWxzL3NpdGUuanMiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJyZXF1aXJlIiwic2l0ZVNjaGVtYSIsIlNjaGVtYSIsImNyZWF0b3IiLCJ0eXBlIiwiVHlwZXMiLCJPYmplY3RJZCIsInJlcXVpcmVkIiwicmVmIiwibmFtZSIsIlN0cmluZyIsImxvZ28iLCJkZXNjcmlwdGlvbiIsImRlbGV0ZWQiLCJCb29sZWFuIiwiZGVmYXVsdCIsInRpbWVzdGFtcHMiLCJtb2RlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLE1BQU1BLFFBQVEsR0FBR0MsT0FBTyxDQUFDLFVBQUQsQ0FBeEI7O0FBRUEsTUFBTUMsVUFBVSxHQUFHLElBQUlGLFFBQVEsQ0FBQ0csTUFBYixDQUNqQjtBQUNFQyxFQUFBQSxPQUFPLEVBQUU7QUFDUEMsSUFBQUEsSUFBSSxFQUFFTCxRQUFRLENBQUNHLE1BQVQsQ0FBZ0JHLEtBQWhCLENBQXNCQyxRQURyQjtBQUVQQyxJQUFBQSxRQUFRLEVBQUUsS0FGSDtBQUdQQyxJQUFBQSxHQUFHLEVBQUU7QUFIRSxHQURYO0FBTUVDLEVBQUFBLElBQUksRUFBRTtBQUNKTCxJQUFBQSxJQUFJLEVBQUVNLE1BREY7QUFFSkgsSUFBQUEsUUFBUSxFQUFFO0FBRk4sR0FOUjtBQVVFSSxFQUFBQSxJQUFJLEVBQUU7QUFDSlAsSUFBQUEsSUFBSSxFQUFFTSxNQURGO0FBRUpILElBQUFBLFFBQVEsRUFBRTtBQUZOLEdBVlI7QUFjRUssRUFBQUEsV0FBVyxFQUFFO0FBQ1hSLElBQUFBLElBQUksRUFBRU0sTUFESztBQUVYSCxJQUFBQSxRQUFRLEVBQUU7QUFGQyxHQWRmO0FBa0JFTSxFQUFBQSxPQUFPLEVBQUU7QUFDUFQsSUFBQUEsSUFBSSxFQUFFVSxPQURDO0FBRVBQLElBQUFBLFFBQVEsRUFBRSxLQUZIO0FBR1BRLElBQUFBLE9BQU8sRUFBRTtBQUhGO0FBbEJYLENBRGlCLEVBeUJqQjtBQUNFQyxFQUFBQSxVQUFVLEVBQUU7QUFEZCxDQXpCaUIsQ0FBbkI7O2VBOEJlakIsUUFBUSxDQUFDa0IsS0FBVCxDQUFlLE1BQWYsRUFBdUJoQixVQUF2QixDIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpO1xuXG5jb25zdCBzaXRlU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYShcbiAge1xuICAgIGNyZWF0b3I6IHtcbiAgICAgIHR5cGU6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZCxcbiAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgIHJlZjogJ1VzZXInLFxuICAgIH0sXG4gICAgbmFtZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIH0sXG4gICAgbG9nbzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIH0sXG4gICAgZGVzY3JpcHRpb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICB9LFxuICAgIGRlbGV0ZWQ6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgdGltZXN0YW1wczogdHJ1ZSxcbiAgfVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWwoJ1NpdGUnLCBzaXRlU2NoZW1hKTtcbiJdfQ==