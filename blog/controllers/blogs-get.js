import { Blog } from "../models/blog.js"
import { db } from "../../zghost/database/db.js"

export const get_blogs = async(req, res) =>{
    try {
        const blogs = await db.findAll(Blog)
        res.json(blogs)
    } catch (error) {
        res.json({error: error.message})
    }
}