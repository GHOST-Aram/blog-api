import { Blog } from "../models/blog.js"

export const get_one_blog = async(req, res) =>{
    const id = req.params.id
    
    try {
        const blog = await Blog.findById(id)
        res.json(blog)
    } catch (error) {
        res.json({error: error.message})
    }
}