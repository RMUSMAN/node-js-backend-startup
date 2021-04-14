import * as express from 'express';
import controller from './controller';
import auth from '../../middlewares/auth';

export default express
  .Router()
  .get('/', auth, controller.getUsers)
  .post('/', auth, controller.createUser)
  .patch('/setupAccount', controller.setupAccount)
  .patch('/:id', auth, controller.updateUser)
  .post('/updateProfile', auth, controller.updateProfile)
  .post('/changePassword', controller.changePassword)
  .get('/:id', controller.getUser);
