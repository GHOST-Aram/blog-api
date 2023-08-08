import { db } from "../../zghost/database/db.js"
import { Blog } from "../models/blog.js"

export const delete_blog = async(req, res) =>{
    const id = req.params.id
    try {
        const deletedBlog = await db.findByIdAndDelete(Blog, id)
        res.json(deletedBlog._id)
    } catch (error) {
        res.json({error: error.message})
    }
}