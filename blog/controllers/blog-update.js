import { db } from "../../zghost/database/db.js"
import { Blog } from "../models/blog.js"
export const update_blog = async(req, res) =>{
    const update_doc = req.body
    const id = req.params.id

    try {
        const result = await db.findByIdAndUpdate(Blog,
            id, update_doc, {
                runValidators: true,
                setDefaultsOnInsert: true,
                new: true,
            }
        )
        
        res.json(result)
    } catch (error) {
        res.json({error: error.message})
    }
}