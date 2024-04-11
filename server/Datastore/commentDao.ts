import { Comment , Post } from "../types"

export interface CommentDao {
    addComment(comment : Comment) : void ;
    listComments(postID:string) : Comment[] ; 
    deleteComment(commentId : string) : void ; 
}