import { LikeDao } from "./LikeDao";
import { PostDao } from "./PostDao";
import { UserDao } from "./UserDao";
import { CommentDao } from "./commentDao";
import { InMemoryDatastore } from "./memoryDB";



export interface Datastore extends UserDao,PostDao,LikeDao,CommentDao  {

}

export const db = new InMemoryDatastore() ;