import express from "express";
import { requestLogger } from "./Middlewares/requestLogger";
import { db } from "./Datastore";
import { listPosts , createPost} from "./RequestHandlers/postsHandler";

const app = express() ; 
app.use(express.json() )
app.use(requestLogger) ;



app.get('/posts' , listPosts) ; 
app.post('/posts' ,createPost ) ; 


app.listen(8888) ;  
