import { Blog } from "../models/blog.js"

export const create_blog = async(req, res) =>{
    const { title, snippet, body } = req.body
    
    const blog = new Blog({
        title, snippet, body
    })
    try {
        const result = await blog.save()
        res.json(result)
    } catch (error) {
        res.json({error: error.message })
    }
}