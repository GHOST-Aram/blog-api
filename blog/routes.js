import { Router } from '../zghost/api/init.js'
import { create_blog } from './controllers/blog-create.js'
import { get_blogs } from './controllers/blogs-get.js'

const blogRouter = Router()

blogRouter.post('/blog', create_blog)
blogRouter.get('/blogs', get_blogs)

export {blogRouter}