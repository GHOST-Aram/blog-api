import { api, express } from "../api/init.js"
import morgan from "morgan";

class Server{

    setViewsDirectory = (dirname) =>{
        api.set('views', dirname)
    }

    setViewEngine = (engine) =>{
        api.set('view engine', engine);
    }

    useJSONPayloads = () => {
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