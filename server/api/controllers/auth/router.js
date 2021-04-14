import * as express from 'express';
import controller from './controller';

export default express
  .Router()
  .post('/signUp', controller.signUp)
  .patch('/verifyAccount', controller.verify)
  .post('/signIn', controller.signIn)
  .post('/forgotPassword', controller.forgotPassword)
  .post('/resend', controller.resend)
  .patch('/resetPassword', controller.resetPassword)
  .post('/facebookLogin', controller.facebookSignIn)
  .post('/googleLogin', controller.googleSignIn);
