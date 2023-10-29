const http = require ("node:http")
const puerto = 3000

const servidor = http.createServer((req , res)=>{
    if(req.url === "/"){
        res.writeHead(200);
        res.end("Bienvenido a la Pagina Principal")
    }else if(req.url === "/acerca"){
        res.writeHead(200);
        res.end("Pagina Acerda de Mi Proyecto")
    }else{
        res.writeHead(404);
        res.end("Pagina No Encontrada")
    }

})

servidor.listen(puerto)
console.log("Servidor activo por puerto ",puerto)