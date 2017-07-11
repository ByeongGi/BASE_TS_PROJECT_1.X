import { Router, Request, Response, NextFunction } from 'express';
import RequestMapping from '../anonotation/RequestMapping';
import { resolve } from "path";
import { readFile } from "fs";
import  post  from "../model/postScheme";

        
const router: Router = Router();
// reqeuestHandler 는 콜백 함수 형식으로 구현되어 있어서 
// 문들 핸들러 자체도 일종의 명령어 집합에 대한 일종의 자료형이 아닐까 생각하다가 이런식으로 코딩하면
// 어떻까 하다가 바꾸어봄
const reqHandlers = 
[ 
    { 
        url : '/postall' ,
        reqhandler : (req: Request, res: Response , next:NextFunction) =>{
            
             res.header("Content-Type", "application/json; charset=utf-8");
             let cursor = post.find({}).sort('asc').exec((err,data)=>{
                // console.log(data);
                res.json(data);
            });
        }
    } , 

    {
        url : '/service' , 

        reqhandler : (req: Request, res: Response , next:NextFunction) => {
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
    
        }
    },

    {
        url : '/index', 
        reqhandler : (req: Request, res: Response , next:NextFunction) => {
            console.log("LOG "+ __dirname);           
            // res.sendFile('index.html');     
            console.log("LOG "+ __dirname);       
            
            next();
        } 

    }

];
 
reqHandlers.forEach((elm)=>{
    router.use(elm.url,elm.reqhandler);
});




// router.use("/postall", (req: Request, res: Response , next:NextFunction) => {
//    res.header("Content-Type", "application/json; charset=utf-8");
//    let cursor = post.find({}).sort('desc').exec((err,data)=>{
//        // console.log(data);
//        res.json(data);
//     });
//    //var postList : Array<any> = [];

// });


// router.use("/service", (req: Request, res: Response , next:NextFunction) => {
//     console.log("====================================================="); 
//     // console.log(__dirname+'/index.html');
//     //console.log(req.param('test'));        
//     // res.type('json');                     
//     res.header("Content-Type", "application/json; charset=utf-8");
//     var test = res.sendFile(resolve('build/test.json'));     
    
//     readFile(resolve('build/test2.json'),{},(err, data)=>{
//         let temp = data.toString();
//         console.log(JSON.parse(temp));      
//         post.insertMany( JSON.parse(temp));
  
//     });

//     //res.sendFile(__dirname+ '/index.html');     
//     //  res.send("service call!");
//     console.log("service end" + test );
//     console.log("====================================================="); 
    
// });
  
// router.use("/index", (req: Request, res: Response , next:NextFunction) => {
//     console.log("LOG "+ __dirname);           
//     // res.sendFile('index.html');     
//     console.log("LOG "+ __dirname);       
    
//     next();
// });          


router.use("/service001", (req: Request, res: Response , next:NextFunction) => {

    res.send('service001');
    next();
});          

export default router;