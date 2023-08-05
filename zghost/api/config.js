import { server } from "../utils/server.js";

export const runConfigurations = () =>{
    server.setViewsDirectory('templates')
    server.setViewEngine('ejs')
    server.useJSONPayloads()
    server.useLogger('dev')
    server.useStaticFiles('static')
    server.useUrlEncodedPayLoads()
    
}