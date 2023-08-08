class DB {
    create = (Model, data) =>{
        const doc = new Model(data)
        return doc
    }

    save = async(document) =>{
        const result = await document.save
        return result
    }
}

export const db = new DB