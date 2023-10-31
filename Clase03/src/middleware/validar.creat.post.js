export {validarPost}
// Personalizado

    const validarPost = ((req , res, next)=>{
        console.log("Pase por el middleware personalizado")
        if(req.url === '/posts' && req.method === 'POST'){
            if (!req.body.title) return res.status(400).send("Error: Falta title")
            if (!req.body.contenido) return res.status(400).send("Error: Falta contenido")
            if (!req.body.image) return res.status(400).send("Error: Falta image")
        }
        next()
    })
    