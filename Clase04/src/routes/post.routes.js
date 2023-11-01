import { Router } from "express";
import { getAllPost, createPost, editPostParcial,editPost, deletePost, } from "../controllers/controller.js"
import { errorController } from "../middleware/error.js"
import { validarCreatPosts } from "../validations/validations.posts.js";
import { verificarValidaciones } from "../middleware/validar.creat.post.js";
// import { validarPost } from "../middleware/validar.creat.post.js";

const postRouter = Router()

postRouter.get('/',getAllPost, errorController)

postRouter.post('/', validarCreatPosts,verificarValidaciones, createPost)

postRouter.patch('/',editPostParcial)

postRouter.put('/',editPost)

postRouter.delete('/',deletePost)

export{postRouter}
