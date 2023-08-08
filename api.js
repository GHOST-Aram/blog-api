import { api } from './zghost/api/init.js';
import { runConfigurations } from './zghost/api/config.js';
import { blogRouter } from './blog/routes.js';

runConfigurations()
// view engine setup
api.use(blogRouter)
api.use((req, res) =>{
    res.status(404).json({error: 'Unavailable resource'})
})

export {api};
