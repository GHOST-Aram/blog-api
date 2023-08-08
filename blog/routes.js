import { Router } from '../zghost/api/init.js'
import { create_blog } from './controllers/blog-create.js'

const blogRouter = Router()

blogRouter.post('/blog', create_blog)

export {blogRouter}