import { FilterChain } from './FilterChain';
import { Filter } from './Filter';
import { FilterConfig } from './FilterConfig';
import * as express from 'express';
import { Request, Response, NextFunction ,Router} from 'express';
import { Log }from '../anonotation';
/**
 * DelegateFilterChain
 *  
 * @description DelegateFilterChain 는 실제로는 fiter 를 하지않고 하위 
 *              필터 객체들에게 실제 필터링 동작을 하도록 위임하여 실행한다. 
 * @since 2017.03.31
 * @author ByeongGiKim
 * @version 0.1
 */
 export default class DelegateFilterChain implements FilterChain {
  
    private filterConfig: FilterConfig;
    private filters : Array<Filter>;
   
    constructor(filters:Array<Filter>){
        this.filters = filters;        
    }
    
            
    public doFilter(req: Request, res: Response) : any {
        let filters = this.filters; 
        filters.map((filter, index , filters)=>{
            filter.doFilter(req,res);
        });
    }

    public initFilter(filterConfig: FilterConfig)
    {
        this.filterConfig = filterConfig;
    }

}
