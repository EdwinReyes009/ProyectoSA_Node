import { query } from "express";
import { createPool, Pool } from "mysql";
import { DB_CONFIG } from "../global/enviroment";

let pool: Pool;

export const conn =()=>{
    try {
        pool = createPool(DB_CONFIG);
    } catch (error) {
        console.error('Conn ERROR', error);
        throw new Error('Failed');
    }  
}

export const queryPro = <T>(query: string, params: string[] | Object):Promise<T> =>{
    try {
        if(!pool) throw new Error('Pool no creado');
        return new Promise<T>((resolve, reject)=>{
            pool.query(query,params,(error,results)=>{
                if(error) reject(error) 
                else resolve(results)
            })
        })
    } catch (error) {
        console.error('Query ERROR', error);
        throw new Error('Failed to execute');
    }
    

}