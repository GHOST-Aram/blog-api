import { Router } from '../zghost/api/init.js'
import { create_blog } from './controllers/blog-create.js'
import { delete_blog } from './controllers/blog-delete.js'
import { update_blog } from './controllers/blog-update.js'
import { get_blogs } from './controllers/blogs-get.js'

const blogRouter = Router()

blogRouter.post('/blog', create_blog)
blogRouter.get('/blogs', get_blogs)
blogRouter.put('/blog/:id', update_blog)
blogRouter.delete('/blog/:id', delete_blog)

export {blogRouter}