import userService from '../../services/user.service';
import { EmailHelpers } from '../../../helpers';
import {
  generateJwt,
  generateInviteLink,
  decodeToken,
  decodeInviteToken,
} from '../../../helpers';
var randomString = require('randomstring');
export class Controller {
  async getUsers(req, res) {
    try {
      const data = decodeToken(req);
      const users = await userService.getAllUsers(data.id);
      res.status(200).json({ data: users });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  async getUser(req, res) {
    try {
      const user = userService.userObject(req.params.id);
      res.status(200).json({ data: user });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async createUser(req, res) {
    try {
      const data = decodeToken(req);
      const user = await userService.getUserByEmail(req.body.email);
      if (user) {
        if (user.email === data.email) {
          return res
            .status(400)
            .json({ message: 'You can not invite yourself' });
        }
        return res.status(400).json({ message: 'Already invited' });
      }
      req.body.password = randomString.generate();
      req.body.creator = data.id;
      req.body.inviteStatus = 'pending';
      const obj = userService.userObject(req);
      const token = generateJwt(obj, req.body.password);
      const link = generateInviteLink(token);
      const savedUser = await userService.registerUser(obj);
      await EmailHelpers.sendInviteEmail(savedUser, link, req, res);
      delete savedUser['password'];
      res.status(200).json({
        data: savedUser,
        message: `Invite is sent to ${savedUser.firstName} ${savedUser.lastName}`,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async setupAccount(req, res) {
    const { token, password } = req.body;
    try {
      const data = decodeInviteToken(token);
      const user = await userService.getUserById(data.id);
      if (!user || !user.comparePassword(data.password)) {
        return res.status(401).json({
          message:
            'Sorry. Your given link is not valid or expired, or already verified',
        });
      }
      user.password = password;
      user.isVerified = true;
      user.inviteStatus = 'accepted';
      await userService.registerUser(user);
      res.status(201).json({
        success: true,
        message: 'Password reset successfully, Sign in to continue',
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async changePassword(req, res) {
    const { password, newPassword } = req.body;
    try {
      const data = decodeToken(req);
      const user = await userService.getUserById(data.id);
      if (!user) {
        return res.status(400).json({ message: 'no user found' });
      }
      if (!user.comparePassword(password)) {
        return res
          .status(400)
          .json({ message: 'Your given old password is incorrect' });
      }
      user.password = newPassword;
      await userService.registerUser(user);
      res.status(201).json({
        success: true,
        message: 'Password is changed successfully',
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateUser(req, res) {
    const id = req.params.id;
    try {
      const updated = await userService.updateUser(id, req.body);
      res.status(201).json({
        success: true,
        data: updated,
      });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async updateProfile(req, res) {
    try {
      const data = decodeToken(req);
      const updated = await userService.updateUser(data.id, req.body);
      res.status(201).json({
        success: true,
        data: updated,
      });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  // async checkRole(data, req, res) {
  //   const user = await userService.getUserByEmail(req.body.email);
  //   if (user.email === data.email) {
  //     return res.status(400).json({ message: 'You can not invite yourself' });
  //   }else if(user?.)
  // }
}
export default new Controller();
