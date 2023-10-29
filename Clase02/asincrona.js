console.log(">> Programacion Asincrona <<")

let time = 200;
const miPromesa = new Promise ((res , rej) =>{
    setTimeout(() => {
        res("Hola Mundo desde miPromesa")
        // rej("Tenemos un Problema")
    },time)
})

// Usando setTimeout


setTimeout (()=>{
    console.log("----> Usando setTimeout")
    console.log(miPromesa , " con setTimeout")
}, time)

//  Usando .then .catch .finally


miPromesa
.then((info)=>{
    console.log("----> Usando .then .catch .finally ")
    console.log(info , "con .then")
})
.catch((info)=>{
    console.log("----> Usando .then .catch .finally ")
    console.log(info , "con .catch")
})
.finally(()=>{
    console.log("terminamos con .finally then o catch")
})

// Usando Asyn  Await



const getInfo = async()=>{
    try{
        const myInfo = await miPromesa
        console.log("----> Usando asyn  await")
        console.log(myInfo , "con asys await")
    }
    catch(error){
        console.log("----> Usando asyn  await")
        console.log(error, "con asys await")
    }
    finally{
        console.log("terminamos con .finally asys await")
    }
 
}

getInfo()


