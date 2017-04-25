import { Request, Response, NextFunction } from 'express';
import { Filter } from './Filter';
import { FilterConfig } from './FilterConfig';

/**
 * 
 * 
 * 기존의 자바 Servlet에서 지원하는 Filter의 구현체로는 
 * Express의 구조에 맞추기 어려워 변경한다. 
 * 실제적으로는 Spring의  인터셉터의 개념에 가깝다.
 * 
 * @description
 * @see
 * @author ByeongGiKim
 * @since 2017-04-25
 * @version 0.1
 */
export interface FilterChain {

    // init():void;
    doFilter(req: Request, res: Response, next:NextFunction):any;
    
}