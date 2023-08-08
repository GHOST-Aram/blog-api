import { Model, ModelSchema } from "../../zghost/database/model.js";

const blogSchema =  new ModelSchema({
    title: {
        type: String, required: true
    },
    snippet: {
        type: String, required: true
    },
    body: {
        type: String,  required: true
    }
})

export const Blog = new Model('Blog', blogSchema)