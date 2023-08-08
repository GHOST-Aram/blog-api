class DB {
    create = (Model, data) =>{
        const doc = new Model(data)
        return doc
    }

    save = async(document) =>{
        const result = await document.save()
        return result
    }

    findAll = async(Model) =>{
        const result = await Model.find().select('_id title snippet')
        return result
    }

    findById = async(Model, id) =>{
        const result = await Model.findById(id)
        return result
    }
    findByIdAndDelete = async(Model, id) =>{
        const deleted = await Model.findByIdAndDelete(id)
        return deleted
    }
    findByIdAndUpdate = async(Model, id, update_doc) =>{
       const result = await Model.findByIdAndUpdate(
        id, update_doc, {
            runValidators: true,
            setDefaultsOnInsert: true,
            new: true,
        }
       )
       return result
    }
}

export const db = new DB