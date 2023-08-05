import { api } from './zghost/api/init.js';
import { catchErrors, renderErrors } from './zghost/utils/http-errors.js';
import { runConfigurations } from './zghost/api/config.js';
import { router as indexRouter } from './tentair/routes/index.js';
import { router as usersRouter } from './tentair/routes/users.js';

runConfigurations()
// view engine setup


api.use('/', indexRouter);
api.use('/users', usersRouter);

api.use(catchErrors);
api.use(renderErrors);

export {api};
