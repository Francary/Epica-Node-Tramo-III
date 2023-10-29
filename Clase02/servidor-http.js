const http = require ("node:http")
const puerto = 3000

const servidor = http.createServer((req , res)=>{
    res.end("Hola desde mi servidor http")

})

servidor.listen(puerto)
console.log("Servidor activo por puerto ",puerto)