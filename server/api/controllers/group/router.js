import * as express from 'express';
import controller from './controller';
import auth from '../../middlewares/auth';
export default express
  .Router()
  .post('/', auth, controller.createGroup)
  .get('/', auth, controller.getGroups)
  .get('/:id', auth, controller.getGroup)
  .patch('/:id', auth, controller.updateGroup);
