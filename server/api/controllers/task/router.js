import * as express from 'express';
import controller from './controller';
import auth from '../../middlewares/auth';
export default express
  .Router()
  .post('/', auth, controller.createTask)
  .get('/', auth, controller.getTasks)
  .get('/:id', auth, controller.getTask)
  .patch('/:id', auth, controller.updateTask);
