import { Router } from '../../zghost/api/init.js'
import { render } from '../../zghost/utils/http-response.js';

const router = Router()

router.get('/', function(req, res, next) {
  render(res, 'tentair/index', { title: 'Express' });
});
export {router};
