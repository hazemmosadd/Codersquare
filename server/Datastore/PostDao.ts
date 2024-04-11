import { Post } from "../types" ;

export interface PostDao {
    listPosts() : Post[] ; 
    createPost(post:Post): void ; 
    deletePost(id:string) : void ; 
    getPost(id:string) : Post | undefined ; 
}