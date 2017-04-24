/* app/server.ts */
// Import everything from express and assign it to the express variable
import * as express from 'express';
import { Request, Response, NextFunction } from 'express';

// Import WelcomeController from controllers entry point
// import { WelcomeController, ServiceController } from './controllers';

import  post  from "./model/postScheme";




import { DelegateFilterChain , Filter, SecurityFilter , EncodingFilter} from './filters';
import { DispatcherServlet } from './servlet';
import SeverceController from "./controllers";


// Create a new express application instance
const app: express.Application = express();
// The port the express app will listen on
const port: number = process.env.PORT || 3000;

app.use(SeverceController);
app.use(express.static('build'));

let filterArr = [new SecurityFilter()
                ,new EncodingFilter()];

/*const filterChain :DelegateFilterChain = new DelegateFilterChain(app,filterArr);
filterChain.delegate(SeverceController);
*/

// Serve the application at the given port
app.listen(port, () => {
    // Success callback
    console.log(`Listening at http://localhost:${port}/`);
});