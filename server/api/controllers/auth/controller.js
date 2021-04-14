import fetch from 'node-fetch';
import userService from '../../services/user.service';
import { EmailHelpers, verifyGoogleToken } from '../../../helpers';
import Token from '../../models/token';
import randomString from 'randomstring';
export class Controller {
  async signUp(req, res) {
    try {
      const user = await userService.getUserByEmail(req.body.email);
      if (user) {
        if (!user.isVerified) {
          await EmailHelpers.sendEmailToVerifyAccount(user, req, res);
          return res.status(400).json({
            verified: false,
            message: 'Your account is not verified, Please check your Email',
          });
        }
        return res.status(400).json({ message: 'User already Exist' });
      }
      req.body.role = 'admin';
      const newUser = userService.userObject(req);
      await userService.registerUser(newUser);
      await EmailHelpers.sendEmailToVerifyAccount(newUser, req, res);
      res.status(201).json({
        success: true,
        message: 'Account is successfully created and email has been sent.',
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  async signIn(req, res) {
    try {
      const { email, password } = req.body;
      const user = await userService.getUserByEmail(email);
      if (user) {
        if (!user.isVerified) {
          await EmailHelpers.sendEmailToVerifyAccount(user, req, res);
          return res.status(401).json({
            message:
              'Your account has not been verified, Please check your Email',
            verified: false,
          });
        }
        if (!user.comparePassword(password)) {
          return res.status(401).json({ message: 'Invalid email or password' });
        }
        const token = user.generateJWT();
        return res.status(200).json({
          message: 'successfully logged in',
          data: {
            user,
            token,
          },
        });
      } else {
        return res.status(500).json({
          message: "Email doesn't not exists",
        });
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async facebookSignIn(req, res) {
    try {
      const { userId, accessToken } = req.body;
      const facebookUrl = `https://graph.facebook.com/${userId}?fields=id,email,first_name,last_name,picture&access_token=${accessToken}`;

      fetch(facebookUrl, {
        method: 'GET',
      })
        .then((res) => res.json())
        .then(async (result) => {
          const { email, first_name, last_name } = result;
          const user = await userService.getUserByEmail(email);
          if (user) {
            const token = user.generateJWT();
            if (!token) {
              return res.status(400).json({
                message: 'error in generating Code',
              });
            }
            return res.status(200).json({
              message: 'successfully logged in',
              data: {
                user,
                token,
              },
            });
          } else {
            const data = {
              body: {
                firstName: first_name,
                lastName: last_name,
                role: 'admin',
                email,
                password: email + randomString.generate(),
              },
            };
            const newUser = userService.userObject(data);
            const user = await userService.registerUser(newUser);
            const token = user.generateJWT();
            if (!token) {
              return res.status(400).json({
                message: 'error in generating Code',
              });
            }
            return res.status(200).json({
              message: 'successfully logged in',
              data: {
                user,
                token,
              },
            });
          }
        })
        .catch((error) => res.status(500).json({ message: error.message }));
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async googleSignIn(req, res) {
    try {
      const { token } = req.body;
      const data = await verifyGoogleToken(token);
      const { email, given_name, family_name, picture } = data;
      const user = await userService.getUserByEmail(email);
      if (user) {
        const token = user.generateJWT();
        if (!token) {
          return res.status(400).json({
            message: 'error in generating Code',
          });
        }
        return res.status(200).json({
          message: 'successfully logged in',
          data: {
            user,
            token,
          },
        });
      } else {
        const data = {
          body: {
            firstName: given_name,
            lastName: family_name,
            avatar: picture,
            role: 'admin',
            email,
            password: email + randomString.generate(),
          },
        };
        const newUser = userService.userObject(data);
        const user = await userService.registerUser(newUser);
        const token = user.generateJWT();
        if (!token) {
          return res.status(400).json({
            message: 'error in generating Code',
          });
        }
        return res.status(200).json({
          message: 'successfully logged in',
          data: {
            user,
            token,
          },
        });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  async forgotPassword(req, res) {
    try {
      const { email } = req.body;
      const user = await userService.getUserByEmail(email);
      if (!user)
        return res.status(401).json({
          message:
            'The email address ' +
            req.body.email +
            ' is not associated with any account',
        });
      await EmailHelpers.sendForgotPasswordCode(user, req, res);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async verify(req, res) {
    if (!req.body.token)
      return res.status(400).json({ message: 'token is not provided' });
    try {
      const token = await Token.findOne({ token: req.body.token });
      if (!token) {
        return res.status(400).json({ message: 'invalid Token' });
      }
      const user = await userService.getUserById(token.userId);
      if (!user) {
        return res.status(400).json({ message: 'no user for this token' });
      }
      if (user.isVerified) {
        res.status(400).json({ message: ' user has already been verified' });
      }
      user.isVerified = true;
      await userService.registerUser(user);
      res.status(201).json({
        success: true,
        message: 'Account is successfully verified',
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  async resend(req, res) {
    try {
      const { email } = req.body;
      const user = await userService.getUserByEmail(email);
      if (!user)
        return res.status(401).json({
          message:
            'The email address ' +
            req.body.email +
            ' is not associated with any account',
        });
      if (user.isVerified)
        res
          .status(400)
          .json({ message: 'This account has already been verified' });
      //    await EmailHelpers.sendEmailToVerifyAccount(user, req, res, true);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async resetPassword(req, res) {
    const { password } = req.body;
    try {
      const token = await Token.findOne({ token: req.body.token });
      if (!token) {
        return res.status(400).json({ message: 'invalid Token or expired' });
      }
      const user = await userService.getUserById(token.userId);
      if (!user) {
        return res.status(400).json({ message: 'no user for this token' });
      }
      user.password = password;
      await userService.registerUser(user);
      res.status(201).json({
        success: true,
        message: 'Password reset successfully, Sign in to continue',
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}
export default new Controller();
