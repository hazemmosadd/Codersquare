import { db } from "../Datastore";
import { ExpressHandler, Post } from "../types";
import crypto from 'crypto' 
interface postResponse { }  
// interface postRequest { 
//     post : Post ; 
// }

type postRequest = Pick <Post, 'title'|'url' |'userId' >;

export const listPosts :ExpressHandler<postRequest , postResponse > = (req , res , next) =>{
    res.send({posts : db.listPosts()}) ; 
}


export const createPost :ExpressHandler<postRequest , postResponse > = (req , res , next) =>{
   
    if (!req.body.userId || !req.body.title || !req.body.userId)
    {
        return res.sendStatus(404) ; 
    }
    const post:Post = {
        id :crypto.randomUUID() ,
        title: req.body.title ,
        url :req.body.url ,
        userId: req.body.userId , 
        postedAt: Date.now() 
        }
    
    db.createPost(post) ; 
    res.sendStatus(200); 
}