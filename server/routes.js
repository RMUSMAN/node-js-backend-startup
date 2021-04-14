import examplesRouter from './api/controllers/examples/router';
import authRouter from './api/controllers/auth/router';
import userRouter from './api/controllers/user/router';
import siteRouter from './api/controllers/site/router';
import groupRouter from './api/controllers/group/router';
import taskRouter from './api/controllers/task/router';

export default function routes(app) {
  app.use('/api/v1/examples', examplesRouter);
  app.use('/api/v1/auth', authRouter);
  app.use('/api/v1/users', userRouter);
  app.use('/api/v1/sites', siteRouter);
  app.use('/api/v1/groups', groupRouter);
  app.use('/api/v1/tasks', taskRouter);
}
