export {getAllPost ,createPost, editPostParcial, editPost, deletePost}
import{ posts } from "../models/post.model.js"


const getAllPost = ( req, res, next) => {

    try {
            if(posts.length < 1){
            return res.sendStatus(204)
        }
        res.status(200).json(posts)
    } catch (error) {
        next("Tenemos Problemas")
    }

}
const createPost = (req,res, next)=>{
    const { title , contenido, image} = req.body

    posts.push({title,contenido,image})

    res.sendStatus(201)
}

const editPostParcial = (req,res)=>{
   res.status(200).send("Metodo del PATCH")
}

const editPost = (req,res)=>{
    res.status(200).send("Metodo del PUT")
}

const deletePost = (req,res)=>{
    res.status(200).send("Metodo del DELETE")
}