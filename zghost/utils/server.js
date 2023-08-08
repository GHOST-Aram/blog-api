import { api, express } from "../api/init.js"
import morgan from "morgan";
import mongoose from 'mongoose'

class Server{
    connectToDB = (DB_URI) =>{
        mongoose.connect(DB_URI).then(result =>{
            console.log('Connected to DB.')
        }).catch(error =>{
            console.error('Failed to connect to DB.', error.message)
        })
    }

    setViewsDirectory = (dirname) =>{
        api.set('views', dirname)
    }

    setViewEngine = (engine) =>{
        api.set('view engine', engine);
    }

    useJSONParsedPayloads = () => {
        api.use(express.json());
    }

    useLogger = (mode) =>{
        api.use(morgan(mode));
    }

    useStaticFiles = (static_dir) =>{
        api.use(express.static(static_dir));
    }

    useUrlEncodedPayLoads = () =>{
        api.use(express.urlencoded({ extended: false }));
    }
}

export const server = new Server()