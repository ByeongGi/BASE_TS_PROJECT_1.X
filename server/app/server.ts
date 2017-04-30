/* app/server.ts */
// Import everything from express and assign it to the express variable
import * as express from 'express';
import { Request, Response, NextFunction } from 'express';
import { DelegateFilterChain , Filter, SecurityFilter , EncodingFilter, MiddlewareFilter} from './filters';
import { DispatcherServlet } from './servlet';
import ServiceController from "./controllers";
import DBConnnecter  from "./db/DBConnnecter";
// Create a new express application instance
const app: express.Application = express();
// The port the express app will listen on
const port: number = process.env.PORT || 3000;

// DB Connnection 
DBConnnecter();
                   
// Static Resouce Mapping 
app.use( express.static('build'));
app.use(MiddlewareFilter)
   .use(ServiceController)
   .use(MiddlewareFilter);


app.use('/', (req:Request, res:Response, next:NextFunction)=>{
    console.log( "LOG : Middleware 007 !");
    next();
});


// Serve the application at the given port
app.listen(port, () => {
    // Success callback
    console.log(`Listening at http://localhost:${port}/`);
});