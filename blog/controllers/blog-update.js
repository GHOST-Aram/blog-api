import { Blog } from "../models/blog.js"

export const update_blog = async(req, res) =>{
    const update_doc = req.body
    const id = req.params.id

    try {
        const result = await Blog.findByIdAndUpdate(
            id, update_doc, {
                runValidators: true,
                setDefaultsOnInsert: true,
                upsert: true,
                new: true,
            }
        )
        
        res.json(result)
    } catch (error) {
        res.json({error: error.message})
    }
}