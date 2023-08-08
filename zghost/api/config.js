import { server } from "../utils/server.js";
import 'dotenv/config.js'

export const runConfigurations = () =>{
    server.useJSONParsedPayloads()
    server.useLogger('dev')
    server.useUrlEncodedPayLoads()

    // Connect to DB
    server.connectToDB(process.env.MONGODB_URI)
    
}