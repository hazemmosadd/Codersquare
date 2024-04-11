import { RequestHandler } from "express";


export interface User {
    id :string ; 
    firstName: string ; 
    userName :string ; 
    email:string ; 
    password:string ; 

}


export interface Post {
    id :string ; 
    title: string ; 
    url :string ; 
    userId:string ; 
    postedAt:number ; 
}

export interface Like {
    userID :string ; 
    postID: string ; 
}


export interface Comment {
    id :string ; 
    userID : string ; 
    postId : string ;
    comment : string ; 
    postedAt:number ; 
}

// here i will extend the type of request handler to check in the body that is coming for me 
// this is RequestHandler as a interface : 
// nterface RequestHandler<P = core.ParamsDictionary, ResBody = any, ReqBody = any, ReqQuery = qs.ParsedQs, Locals extends Record<string, any> = Record<string, any>>

// so we will make  a new type to check more in the request we are just using Request handler in a more advanced way 

export type ExpressHandler<Req ,Res> = RequestHandler<string , Partial<Res> , Partial<Req> , any > ;




