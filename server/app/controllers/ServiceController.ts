import { Router, Request, Response, NextFunction } from 'express';
import RequestMapping from '../anonotation/RequestMapping';
import Controller from '../anonotation/Controller';
import { resolve } from "path";
import { readFile } from "fs";
import  post  from "../model/postScheme";

        
const router: Router = Router();


router.use("/postall", (req: Request, res: Response , next:NextFunction) => {
   res.header("Content-Type", "application/json; charset=utf-8");
   let cursor = post.find({}).sort('desc').exec((err,data)=>{
       // console.log(data);
       res.json(data);
    });
   //var postList : Array<any> = [];

});


router.use("/service", (req: Request, res: Response , next:NextFunction) => {
    console.log("====================================================="); 
    // console.log(__dirname+'/index.html');
    //console.log(req.param('test'));        
    // res.type('json');                     
    res.header("Content-Type", "application/json; charset=utf-8");
    var test = res.sendFile(resolve('build/test.json'));     
    
    readFile(resolve('build/test2.json'),{},(err, data)=>{
        let temp = data.toString();
        console.log(JSON.parse(temp));      
        post.insertMany( JSON.parse(temp));
  
    });

    //res.sendFile(__dirname+ '/index.html');     
    //  res.send("service call!");
    console.log("service end" + test );
    console.log("====================================================="); 
    
});
  
router.use("/index", (req: Request, res: Response , next:NextFunction) => {
    console.log("LOG "+ __dirname);           
    // res.sendFile('index.html');     
    console.log("LOG "+ __dirname);       
    
    next();
});          
export default router;