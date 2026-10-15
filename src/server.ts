const fastify =require("fastify")({logger:true})
const PORT = 5000

//register swagger
fastify.register(require("@fastify/swagger"),{
    openapi:{
        info:{
            ttile:"Fastify API",
            description:"my first fastify API documentation",
            version:"1.0.0"
        }
    }
})
//register swagger-ui
fastify.register(require("@fastify/swagger-ui"),{
    routePrefix:"api"
})
fastify.get("/items",(req,reply)=>{
    return {test:"items"}
})
const start=async()=>{
    try{
        await fastify.listen({port:PORT})
        console.log("running at port",PORT)
    }
    catch(err){
        fastify.log.error(err)
        process.exit(1)
    }
    
}
start()