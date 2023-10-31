import express from "express"
import  morgan from "morgan"
import helmet from "helmet"
import cors from "cors"
import { postRouter } from "./routes/post.routes.js"
import { validarPost } from "./middleware/validar.creat.post.js"

const puerto = 3000
const servidor = express()

// middleware

    // Comunes
servidor.use(morgan("dev"))
servidor.use(cors())
servidor.use(helmet())
servidor.use(express.static("Clase03/src/public"))

    // Para que ande Body
servidor.use(express.json())

    // Para que ande formulario
servidor.use(express.urlencoded({extended: false}))
    
    // Validacion personalizada 
servidor.use(validarPost)

servidor.use("/posts",postRouter)

servidor.get('/', (req , res) => {
    res.sendFile('index.html')                   
})

servidor.listen(puerto)
console.log(`Servidor activo por puerto ${puerto}` )