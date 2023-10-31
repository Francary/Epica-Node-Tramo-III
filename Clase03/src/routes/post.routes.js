import { Router } from "express";
import { getAllPost, createPost, editPostParcial,editPost, deletePost,} from "../controllers/controller.js"
import { errorController } from "../middleware/error.js"

const postRouter = Router()


postRouter.get('/',getAllPost, errorController)

postRouter.post('/',createPost)

postRouter.patch('/',editPostParcial)

postRouter.put('/',editPost)

postRouter.delete('/',deletePost)

export{postRouter}
