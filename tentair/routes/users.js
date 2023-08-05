import { Router } from '../../zghost/api/init.js';

const router = Router()

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

export {router};
