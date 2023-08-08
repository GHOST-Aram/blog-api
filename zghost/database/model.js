import { Schema, model } from 'mongoose'

export class ModelSchema extends Schema{}
export class Model{
    constructor(identifier, modelSchema){
        return model(identifier, modelSchema)
    }
}