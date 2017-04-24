import { Router, Request, Response, NextFunction } from 'express';
// import SeverceController from "../controllers";

import {readFile} from "fs";
import {dirname} from "path";
// import Post from "../model/postScheme";



const router : Router = Router();





// requstMapping 여기서 해야한다.
// 컨트롤러를 여기다가 다 묶는다.
// requstMapping를 선언한  Controller 자동으로 router객체를 통해서 
// 등록하는 function으로 구현할가 고민중....
// router.use((req: Request, res: Response , next:NextFunction) => {
//     req.path
//     console.log("====================================================="); 
//     console.log(req.param('test'));
//     console.log(" baseUrl : "+req.baseUrl);
//     console.log(" originalUrl : "+req.originalUrl);
//     console.log(" hostname : "+req.hostname);
//     console.log(" method : "+req.method);
//     console.log(" ip : "+req.ip);
//     console.log(req.body);
//     //res.send("service call!");
//     console.log("service end");
//     console.log("=====================================================");
//    /* console.log(__dirname+'/');
//     res.header("Content-Type", "application/json; charset=utf-8");
//     res.sendfile('test.json'); 
//     */
//     console.log("=====================================================");
    
//     next(); 
// });

// class internalServlet {

    


// }

export const DispatcherServlet : Router = router;


