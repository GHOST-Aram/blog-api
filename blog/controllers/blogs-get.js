import { Blog } from "../models/blog.js"

export const get_blogs = async(req, res) =>{
    try {
        const blogs = await Blog.find().select('_id title snippet')
        res.json(blogs)
    } catch (error) {
        res.json({error: error.message})
    }
}