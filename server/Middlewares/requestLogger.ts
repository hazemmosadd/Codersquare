import { RequestHandler } from "express";


export const requestLogger:RequestHandler  = (req , res , next) => {
   console.log("Method : " + req.method + " Path : " + req.path + " Body : " + req.body);
    next() ; 
}
