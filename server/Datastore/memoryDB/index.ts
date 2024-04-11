import { Datastore } from ".."; 
import { User, Post, Like, Comment } from "../../types";

export class InMemoryDatastore implements Datastore {
    
    
    private users:User[] = [] ; 
    private posts:Post[] = [] ; 
    private likes:Like[] = [] ; 
    private comments:Comment[] = [] ; 


    createUser(user: User): void {
        this.users.push(user) ;     }
    getUserByEmail(email: string): User | undefined {
        return this.users.find(user => user.email === email) ; 
        }
    getUserByUsername(username: string): User | undefined {
        return this.users.find(user => user.userName === username) ; 
    }
    listPosts(): Post[] {
        return this.posts ; 
    }
    createPost(post: Post): void {
        this.posts.push(post) ; 
        }
    deletePost(id: string): void {
        const index = this.posts.findIndex(post=> post.id === id ) ; 
        if (index === -1 )
        return ; 
        else 
        this.posts.splice(index , 1 ) ; 
    }
    getPost(id: string): Post | undefined {
        return this.posts.find(p => p.id === id) ; 
    }
    createLike(like: Like): void {
        this.likes.push(like) ; 
    }
    addComment(comment: Comment): void {
        this.comments.push(comment) ; 
    }
    listComments(postID: string): Comment[] {
        return this.comments ; 
    }
    deleteComment(commentId: string): void {
        const index = this.comments.findIndex(comment=> comment.id === commentId ) ; 
        if (index === -1 )
        return ; 
        else 
        this.comments.splice(index , 1 ) ; 
    }
    
}
