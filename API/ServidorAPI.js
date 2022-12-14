//const express = require('express')//Forma vieja de importar
import cors from 'cors'
import  express  from 'express'
import {rutasPersonalizadas} from '../Routes/rutas.js'
import {conectarConMongo} from '../Database/conexion.js'
export class ServidorAPI{

    constructor(){
        this.app = express()
        this.ConectarConDB()
        this.activarBody()
        this.AtenderPeticiones()
    }
    //Metodos de la clase ServidorAPI
    DespertarServidor(){
        //ENCENDIENDO EL SERVIDOR EN EL PUERTO 3000
        this.app.listen(process.env.PORT,function(){
        console.log("SERVIDOR ENCENDIDO : " + process.env.PORT)
})
    }
    AtenderPeticiones(){
        this.app.use('/', rutasPersonalizadas)
    }
        
    ConectarConDB(){
        conectarConMongo()
    }

    activarBody(){
        this.app.use(cors())
        this.app.use(express.json())
    }

}