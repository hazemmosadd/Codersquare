import { Datastore } from "..";
import { User, Post, Like, Comment } from "../../types";
export class diskDatastore implements Datastore {
    // i guess we will create an object that defines a connection to the database
    // this connection will be made in some kind of a constructor ? 
    // we will make one object that defines a connection that will be used every where 
    // once we made an object i think there is a connection established iam not trying to connect every time to the database ? 
     
    
    createUser(user: User): void {
        throw new Error("Method not implemented.");
    }
    getUserByEmail(email: string): User {
        throw new Error("Method not implemented.");
    }
    getUserByUsername(username: string): User {
        throw new Error("Method not implemented.");
    }
    listPosts(): Post[] {
        throw new Error("Method not implemented.");
    }
    createPost(post: Post): void {
        throw new Error("Method not implemented.");
    }
    deletePost(id: string): void {
        throw new Error("Method not implemented.");
    }
    getPost(id: string): Post {
        throw new Error("Method not implemented.");
    }
    createLike(like: Like): void {
        throw new Error("Method not implemented.");
    }
    addComment(comment: Comment): void {
        throw new Error("Method not implemented.");
    }
    listComments(postID: string): Comment[] {
        throw new Error("Method not implemented.");
    }
    deleteComment(commentId: string): void {
        throw new Error("Method not implemented.");
    }

}