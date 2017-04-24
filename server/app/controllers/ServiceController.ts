import { Router, Request, Response, NextFunction } from 'express';
import RequestMapping from '../anonotation/RequestMapping';
import Controller from '../anonotation/Controller';

// @Controller
// class ServiceController {
          
//     @RequestMapping('/')
//     public index(): void {
//         console.log("TEST!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
//     }


// }



const router: Router = Router();


// router.use("/", (req: Request, res: Response , next:NextFunction) => {
    
//     res.sendFile('/../../build/index.html');    

// });


router.use("/service", (req: Request, res: Response , next:NextFunction) => {
    console.log("====================================================="); 
    console.log(req.param('test'));
            
    console.log(__dirname+'/');
    res.header("Content-Type", "application/json; charset=utf-8");
    res.sendfile('test.json'); 

   //  res.send("service call!");
    console.log("service end");
    console.log("====================================================="); 
});



export default router;



// export const ServiceController: Router = router;


