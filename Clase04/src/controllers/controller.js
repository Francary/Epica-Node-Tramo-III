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

const createPost = (req,res) => {

    const { title , contenido, image} = req.body
    posts.push({title,contenido,image})
    // Opcion 1 con mensaje por defecto de creacion
    res.sendStatus(201)

    // Opcion 2 con mensaje se creacion personalizado
    // res.status(201).send("Posts Creado Correctamente")
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