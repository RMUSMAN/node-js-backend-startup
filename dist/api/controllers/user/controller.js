"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Controller = void 0;

var _user = _interopRequireDefault(require("../../services/user.service"));

var _helpers = require("../../../helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var randomString = require('randomstring');

class Controller {
  async getUsers(req, res) {
    try {
      const data = (0, _helpers.decodeToken)(req);
      const users = await _user.default.getAllUsers(data.id);
      res.status(200).json({
        data: users
      });
    } catch (error) {
      res.status(500).json({
        message: error.message
      });
    }
  }

  async getUser(req, res) {
    try {
      const user = _user.default.userObject(req.params.id);

      res.status(200).json({
        data: user
      });
    } catch (error) {
      res.status(500).json({
        message: error.message
      });
    }
  }

  async createUser(req, res) {
    try {
      const data = (0, _helpers.decodeToken)(req);
      const user = await _user.default.getUserByEmail(req.body.email);

      if (user) {
        if (user.email === data.email) {
          return res.status(400).json({
            message: 'You can not invite yourself'
          });
        }

        return res.status(400).json({
          message: 'Already invited'
        });
      }

      req.body.password = randomString.generate();
      req.body.creator = data.id;
      req.body.inviteStatus = 'pending';

      const obj = _user.default.userObject(req);

      const token = (0, _helpers.generateJwt)(obj, req.body.password);
      const link = (0, _helpers.generateInviteLink)(token);
      const savedUser = await _user.default.registerUser(obj);
      await _helpers.EmailHelpers.sendInviteEmail(savedUser, link, req, res);
      delete savedUser['password'];
      res.status(200).json({
        data: savedUser,
        message: `Invite is sent to ${savedUser.firstName} ${savedUser.lastName}`
      });
    } catch (error) {
      res.status(500).json({
        message: error.message
      });
    }
  }

  async setupAccount(req, res) {
    const {
      token,
      password
    } = req.body;

    try {
      const data = (0, _helpers.decodeInviteToken)(token);
      const user = await _user.default.getUserById(data.id);

      if (!user || !user.comparePassword(data.password)) {
        return res.status(401).json({
          message: 'Sorry. Your given link is not valid or expired, or already verified'
        });
      }

      user.password = password;
      user.isVerified = true;
      user.inviteStatus = 'accepted';
      await _user.default.registerUser(user);
      res.status(201).json({
        success: true,
        message: 'Password reset successfully, Sign in to continue'
      });
    } catch (error) {
      res.status(500).json({
        message: error.message
      });
    }
  }

  async changePassword(req, res) {
    const {
      password,
      newPassword
    } = req.body;

    try {
      const data = (0, _helpers.decodeToken)(req);
      const user = await _user.default.getUserById(data.id);

      if (!user) {
        return res.status(400).json({
          message: 'no user found'
        });
      }

      if (!user.comparePassword(password)) {
        return res.status(400).json({
          message: 'Your given old password is incorrect'
        });
      }

      user.password = newPassword;
      await _user.default.registerUser(user);
      res.status(201).json({
        success: true,
        message: 'Password is changed successfully'
      });
    } catch (error) {
      res.status(500).json({
        message: error.message
      });
    }
  }

  async updateUser(req, res) {
    const id = req.params.id;

    try {
      const updated = await _user.default.updateUser(id, req.body);
      res.status(201).json({
        success: true,
        data: updated
      });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async updateProfile(req, res) {
    try {
      const data = (0, _helpers.decodeToken)(req);
      const updated = await _user.default.updateUser(data.id, req.body);
      res.status(201).json({
        success: true,
        data: updated
      });
    } catch (error) {
      res.status(500).send(error);
    }
  } // async checkRole(data, req, res) {
  //   const user = await userService.getUserByEmail(req.body.email);
  //   if (user.email === data.email) {
  //     return res.status(400).json({ message: 'You can not invite yourself' });
  //   }else if(user?.)
  // }


}

exports.Controller = Controller;

var _default = new Controller();

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlcnZlci9hcGkvY29udHJvbGxlcnMvdXNlci9jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbInJhbmRvbVN0cmluZyIsInJlcXVpcmUiLCJDb250cm9sbGVyIiwiZ2V0VXNlcnMiLCJyZXEiLCJyZXMiLCJkYXRhIiwidXNlcnMiLCJ1c2VyU2VydmljZSIsImdldEFsbFVzZXJzIiwiaWQiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJtZXNzYWdlIiwiZ2V0VXNlciIsInVzZXIiLCJ1c2VyT2JqZWN0IiwicGFyYW1zIiwiY3JlYXRlVXNlciIsImdldFVzZXJCeUVtYWlsIiwiYm9keSIsImVtYWlsIiwicGFzc3dvcmQiLCJnZW5lcmF0ZSIsImNyZWF0b3IiLCJpbnZpdGVTdGF0dXMiLCJvYmoiLCJ0b2tlbiIsImxpbmsiLCJzYXZlZFVzZXIiLCJyZWdpc3RlclVzZXIiLCJFbWFpbEhlbHBlcnMiLCJzZW5kSW52aXRlRW1haWwiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInNldHVwQWNjb3VudCIsImdldFVzZXJCeUlkIiwiY29tcGFyZVBhc3N3b3JkIiwiaXNWZXJpZmllZCIsInN1Y2Nlc3MiLCJjaGFuZ2VQYXNzd29yZCIsIm5ld1Bhc3N3b3JkIiwidXBkYXRlVXNlciIsInVwZGF0ZWQiLCJzZW5kIiwidXBkYXRlUHJvZmlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O0FBT0EsSUFBSUEsWUFBWSxHQUFHQyxPQUFPLENBQUMsY0FBRCxDQUExQjs7QUFDTyxNQUFNQyxVQUFOLENBQWlCO0FBQ1IsUUFBUkMsUUFBUSxDQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBVztBQUN2QixRQUFJO0FBQ0YsWUFBTUMsSUFBSSxHQUFHLDBCQUFZRixHQUFaLENBQWI7QUFDQSxZQUFNRyxLQUFLLEdBQUcsTUFBTUMsY0FBWUMsV0FBWixDQUF3QkgsSUFBSSxDQUFDSSxFQUE3QixDQUFwQjtBQUNBTCxNQUFBQSxHQUFHLENBQUNNLE1B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Q0E7OztBQWhJc0I7Ozs7ZUFrSVQsSUFBSVgsVUFBSixFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZXJTZXJ2aWNlIGZyb20gJy4uLy4uL3NlcnZpY2VzL3VzZXIuc2VydmljZSc7XG5pbXBvcnQgeyBFbWFpbEhlbHBlcnMgfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzJztcbmltcG9ydCB7XG4gIGdlbmVyYXRlSnd0LFxuICBnZW5lcmF0ZUludml0ZUxpbmssXG4gIGRlY29kZVRva2VuLFxuICBkZWNvZGVJbnZpdGVUb2tlbixcbn0gZnJvbSAnLi4vLi4vLi4vaGVscGVycyc7XG52YXIgcmFuZG9tU3RyaW5nID0gcmVxdWlyZSgncmFuZG9tc3RyaW5nJyk7XG5leHBvcnQgY2xhc3MgQ29udHJvbGxlciB7XG4gIGFzeW5jIGdldFVzZXJzKHJlcSwgcmVzKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBkZWNvZGVUb2tlbihyZXEpO1xuICAgICAgY29uc3QgdXNlcnMgPSBhd2FpdCB1c2VyU2VydmljZS5nZXRBbGxVc2VycyhkYXRhLmlkKTtcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZGF0YTogdXNlcnMgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9KTtcbiAgICB9XG4gIH1cbiAgYXN5bmMgZ2V0VXNlcihyZXEsIHJlcykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB1c2VyID0gdXNlclNlcnZpY2UudXNlck9iamVjdChyZXEucGFyYW1zLmlkKTtcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZGF0YTogdXNlciB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH0pO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZVVzZXIocmVxLCByZXMpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IGRlY29kZVRva2VuKHJlcSk7XG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgdXNlclNlcnZpY2UuZ2V0VXNlckJ5RW1haWwocmVxLmJvZHkuZW1haWwpO1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgaWYgKHVzZXIuZW1haWwgPT09IGRhdGEuZW1haWwpIHtcbiAgICAgICAgICByZXR1cm4gcmVzXG4gICAgICAgICAgICAuc3RhdHVzKDQwMClcbiAgICAgICAgICAgIC5qc29uKHsgbWVzc2FnZTogJ1lvdSBjYW4gbm90IGludml0ZSB5b3Vyc2VsZicgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogJ0FscmVhZHkgaW52aXRlZCcgfSk7XG4gICAgICB9XG4gICAgICByZXEuYm9keS5wYXNzd29yZCA9IHJhbmRvbVN0cmluZy5nZW5lcmF0ZSgpO1xuICAgICAgcmVxLmJvZHkuY3JlYXRvciA9IGRhdGEuaWQ7XG4gICAgICByZXEuYm9keS5pbnZpdGVTdGF0dXMgPSAncGVuZGluZyc7XG4gICAgICBjb25zdCBvYmogPSB1c2VyU2VydmljZS51c2VyT2JqZWN0KHJlcSk7XG4gICAgICBjb25zdCB0b2tlbiA9IGdlbmVyYXRlSnd0KG9iaiwgcmVxLmJvZHkucGFzc3dvcmQpO1xuICAgICAgY29uc3QgbGluayA9IGdlbmVyYXRlSW52aXRlTGluayh0b2tlbik7XG4gICAgICBjb25zdCBzYXZlZFVzZXIgPSBhd2FpdCB1c2VyU2VydmljZS5yZWdpc3RlclVzZXIob2JqKTtcbiAgICAgIGF3YWl0IEVtYWlsSGVscGVycy5zZW5kSW52aXRlRW1haWwoc2F2ZWRVc2VyLCBsaW5rLCByZXEsIHJlcyk7XG4gICAgICBkZWxldGUgc2F2ZWRVc2VyWydwYXNzd29yZCddO1xuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICBkYXRhOiBzYXZlZFVzZXIsXG4gICAgICAgIG1lc3NhZ2U6IGBJbnZpdGUgaXMgc2VudCB0byAke3NhdmVkVXNlci5maXJzdE5hbWV9ICR7c2F2ZWRVc2VyLmxhc3ROYW1lfWAsXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH0pO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHNldHVwQWNjb3VudChyZXEsIHJlcykge1xuICAgIGNvbnN0IHsgdG9rZW4sIHBhc3N3b3JkIH0gPSByZXEuYm9keTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IGRlY29kZUludml0ZVRva2VuKHRva2VuKTtcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB1c2VyU2VydmljZS5nZXRVc2VyQnlJZChkYXRhLmlkKTtcbiAgICAgIGlmICghdXNlciB8fCAhdXNlci5jb21wYXJlUGFzc3dvcmQoZGF0YS5wYXNzd29yZCkpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHtcbiAgICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgICAgJ1NvcnJ5LiBZb3VyIGdpdmVuIGxpbmsgaXMgbm90IHZhbGlkIG9yIGV4cGlyZWQsIG9yIGFscmVhZHkgdmVyaWZpZWQnLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHVzZXIucGFzc3dvcmQgPSBwYXNzd29yZDtcbiAgICAgIHVzZXIuaXNWZXJpZmllZCA9IHRydWU7XG4gICAgICB1c2VyLmludml0ZVN0YXR1cyA9ICdhY2NlcHRlZCc7XG4gICAgICBhd2FpdCB1c2VyU2VydmljZS5yZWdpc3RlclVzZXIodXNlcik7XG4gICAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7XG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgIG1lc3NhZ2U6ICdQYXNzd29yZCByZXNldCBzdWNjZXNzZnVsbHksIFNpZ24gaW4gdG8gY29udGludWUnLFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9KTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBjaGFuZ2VQYXNzd29yZChyZXEsIHJlcykge1xuICAgIGNvbnN0IHsgcGFzc3dvcmQsIG5ld1Bhc3N3b3JkIH0gPSByZXEuYm9keTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IGRlY29kZVRva2VuKHJlcSk7XG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgdXNlclNlcnZpY2UuZ2V0VXNlckJ5SWQoZGF0YS5pZCk7XG4gICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogJ25vIHVzZXIgZm91bmQnIH0pO1xuICAgICAgfVxuICAgICAgaWYgKCF1c2VyLmNvbXBhcmVQYXNzd29yZChwYXNzd29yZCkpIHtcbiAgICAgICAgcmV0dXJuIHJlc1xuICAgICAgICAgIC5zdGF0dXMoNDAwKVxuICAgICAgICAgIC5qc29uKHsgbWVzc2FnZTogJ1lvdXIgZ2l2ZW4gb2xkIHBhc3N3b3JkIGlzIGluY29ycmVjdCcgfSk7XG4gICAgICB9XG4gICAgICB1c2VyLnBhc3N3b3JkID0gbmV3UGFzc3dvcmQ7XG4gICAgICBhd2FpdCB1c2VyU2VydmljZS5yZWdpc3RlclVzZXIodXNlcik7XG4gICAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7XG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgIG1lc3NhZ2U6ICdQYXNzd29yZCBpcyBjaGFuZ2VkIHN1Y2Nlc3NmdWxseScsXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH0pO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHVwZGF0ZVVzZXIocmVxLCByZXMpIHtcbiAgICBjb25zdCBpZCA9IHJlcS5wYXJhbXMuaWQ7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHVwZGF0ZWQgPSBhd2FpdCB1c2VyU2VydmljZS51cGRhdGVVc2VyKGlkLCByZXEuYm9keSk7XG4gICAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7XG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgIGRhdGE6IHVwZGF0ZWQsXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmVzLnN0YXR1cyg1MDApLnNlbmQoZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHVwZGF0ZVByb2ZpbGUocmVxLCByZXMpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IGRlY29kZVRva2VuKHJlcSk7XG4gICAgICBjb25zdCB1cGRhdGVkID0gYXdhaXQgdXNlclNlcnZpY2UudXBkYXRlVXNlcihkYXRhLmlkLCByZXEuYm9keSk7XG4gICAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7XG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgIGRhdGE6IHVwZGF0ZWQsXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmVzLnN0YXR1cyg1MDApLnNlbmQoZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGFzeW5jIGNoZWNrUm9sZShkYXRhLCByZXEsIHJlcykge1xuICAvLyAgIGNvbnN0IHVzZXIgPSBhd2FpdCB1c2VyU2VydmljZS5nZXRVc2VyQnlFbWFpbChyZXEuYm9keS5lbWFpbCk7XG4gIC8vICAgaWYgKHVzZXIuZW1haWwgPT09IGRhdGEuZW1haWwpIHtcbiAgLy8gICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6ICdZb3UgY2FuIG5vdCBpbnZpdGUgeW91cnNlbGYnIH0pO1xuICAvLyAgIH1lbHNlIGlmKHVzZXI/LilcbiAgLy8gfVxufVxuZXhwb3J0IGRlZmF1bHQgbmV3IENvbnRyb2xsZXIoKTtcbiJdfQ==