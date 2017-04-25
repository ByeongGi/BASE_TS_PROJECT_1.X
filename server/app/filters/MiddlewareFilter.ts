import { Request, Response, NextFunction ,Router} from 'express';
import  Filter from './Filter';
import  DelegateFilterChain  from "./DelegateFilterChain";
import SecurityFilter  from './SecurityFilter';
import EncodingFilter  from './EncodingFilter';
/**
 * MiddlewareFilter는 Filter와의 아답터 패턴으로 구성 
 * TODO :  내부 리 팩토링 필요   
 * @param req 
 * @param res 
 * @param next 
 */
export default function MiddlewareFilter (req:Request, res:Response, next:NextFunction){
    console.log("======================>>>>>>>>>>>>>> START Filter");
    console.log( "LOG : Middleware 001 !"+ new Date());
    const filterChain =new  DelegateFilterChain([new SecurityFilter(), new EncodingFilter()]);
    // filterChain.doFilter(req,res); 
    next();
}