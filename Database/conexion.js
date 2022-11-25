import  mongoose  from  'mongoose' ;

export async function conectarConMongo(){
    try{
        await mongoose.connect(process.env.DATABASE);
        console.log("EXITO AL CONECTAR CON MONGO")

    }catch(error){
        console.log(error)

    }
}