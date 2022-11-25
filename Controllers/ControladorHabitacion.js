import {ServicioHabitacion} from '../Services/ServicioHabitacion.js'


export class ControladorHabitacion{
    constructor(){}


    async BuscarHabitaciones(request, response){
        
        let objetoServicioHabitacion = new ServicioHabitacion()
        try {
            response.status(200).json({
                "mensaje": "exito en la consulta",
                "datos": await objetoServicioHabitacion.buscarHabitaciones(),
            })
        } catch (error) {
            response.status(400).json({
                "mensaje": "error en la consulta" + error,
                "datos":null
            })
        }

    }
    async BuscarHabitacionesPorId(request, response){
        let id = request.params.idHabitacion
        let objetoServicioHabitacion = new ServicioHabitacion()
        try {
            response.status(200).json({
                "mensaje":"exito al buscar " + id,
                "datos": await objetoServicioHabitacion.buscarHabitacionesPorId(id),
            })
        } catch (error) {
            response.status(400).json({
                "mensaje": "error en la consulta " + error,
                "datos":null
            })
        }
       
    }
    async RegistrarHabitacion(request, response){
        let datosHabitacion = request.body
        let objetoServicioHabitacion = new ServicioHabitacion()
        try {
            if(datosHabitacion.numeroMaximoPersonas < 8){
                await objetoServicioHabitacion.agregarHabitacionEnBD(datosHabitacion)

                response.status(200).json({
                    "mensaje": "Exito registrando habitacion",
                    "datos":null
                })
            }else{
                response.status(400).json({
                    "mensaje": "No caben tanta personas",
                    "datos":null
                })
            }
           
        } catch (error) {
            response.status(400).json({
                "mensaje": "error en la consulta " + error,
                "datos":null
            })
        }
    }
    async EditarHabitacion(request, response){
        let id = request.params.idHabitacion
        let datosHabitacion = request.body
        let objetoServicioHabitacion = new ServicioHabitacion()
        
        try {
            await objetoServicioHabitacion.editarHabitacion(id,datosHabitacion)
            response.status(200).json({
                "mensaje": "exito editando " + id ,
                "datos":null,
            })
        } catch (error) {
            response.status(400).json({
                "mensaje": "error en la consulta" + error,
                "datos":null
            })
        }
    }



    
}