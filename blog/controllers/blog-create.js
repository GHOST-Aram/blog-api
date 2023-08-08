import { db } from "../../zghost/database/db.js"
import { Blog } from "../models/blog.js"

export const create_blog = async(req, res) =>{
    const { title, snippet, body } = req.body
    
    const blog = db.create(Blog, {
        title, snippet, body
    })
    try {
        const result = await db.save(blog)
        res.json(result._id)
    } catch (error) {
        res.json({error: error.message })
    }
}