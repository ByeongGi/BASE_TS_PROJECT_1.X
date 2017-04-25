import { Router, Request, Response, NextFunction } from 'express';
import RequestMapping from '../anonotation/RequestMapping';
import Controller from '../anonotation/Controller';


const router: Router = Router();



router.use("/service", (req: Request, res: Response , next:NextFunction) => {
    console.log("====================================================="); 
    // console.log(__dirname+'/index.html');
    //console.log(req.param('test'));        
                          
    //res.header("Content-Type", "application/json; charset=utf-8");
    // res.sendfile('test.json');  
    //res.sendFile(__dirname+ '/index.html');     
    //  res.send("service call!");
    console.log("service end");
    console.log("====================================================="); 
    next();
});

router.use("/index", (req: Request, res: Response , next:NextFunction) => {
    console.log("LOG "+ __dirname);           
   
    console.log("LOG "+ __dirname);       
    
    next();
});          
 


export default router;



// export const ServiceController: Router = router;


