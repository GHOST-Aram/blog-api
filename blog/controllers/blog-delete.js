import { Blog } from "../models/blog.js"

export const delete_blog = async(req, res) =>{
    const id = req.params.id
    try {
        const deletedBlog = await Blog.findByIdAndDelete(id)
        res.json(deletedBlog)
    } catch (error) {
        res.json({error: error.message})
    }
}