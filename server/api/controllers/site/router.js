import * as express from 'express';
import controller from './controller';
import auth from '../../middlewares/auth';
export default express
  .Router()
  .post('/', auth, controller.createSite)
  .get('/', auth, controller.getSites)
  .get('/:id', auth, controller.getSite)
  .patch('/:id', auth, controller.updateSite);
