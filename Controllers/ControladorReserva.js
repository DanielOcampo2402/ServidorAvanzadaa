import {ServicioReserva} from '../Services/ServicioReserva.js'
import {ServicioHabitacion} from '../Services/ServicioHabitacion.js'
export class ControladorReserva{
    constructor(){}


    async BuscarReserva(request, response){
        let objetoServicioReserva = new ServicioReserva()
        try {
            response.status(200).json({
                "mensaje": "exito al buscar reservas",
                "datos": await objetoServicioReserva.buscarReserva(),
            })
        } catch (error) {
            response.status(400).json({
                "mensaje": "error en la consulta" + error,
                "datos":null
            })
        }
        

    }
    async BuscarReservaPorId(request, response){
        let id = request.params.idReserva
        let objetoServicioReserva = new ServicioReserva()
        try {
            response.status(200).json({
                "mensaje": "exito al buscar " + id,
                "datos":await objetoServicioReserva.buscarReservaPorId(id),
            })
        } catch (error) {
            response.status(400).json({
                "mensaje": "error en la consulta " + error,
                "datos":null
            })
        }
        
        
    }
    async RegistrarReserva(request, response){
         let datosReserva = request.body
         let objetoServicioReserva = new ServicioReserva()
         let objetoServicioHabitacion = new ServicioHabitacion()
        try {
            await objetoServicioReserva.agregarReservaEnBD(datosReserva)
            response.status(200).json({
                "mensaje": "exito al registrar la reserva",
                "datos":null
            })
        } catch (error) {
            response.status(400).json({
                "mensaje": "error en la consulta" + error,
                "datos":null
            })
        }
        
       
    }
    async EditarReserva(request, response){
        let id = request.params.idReserva
        let datosReserva = request.body
        let objetoServicioReserva = new ServicioReserva()
        console.log(id,datosReserva)
        try {
            await objetoServicioReserva.editarHabitacion(id,datosHabitacion)
            response.status(200).json({
                "mensaje": "exito editando " + id ,
                "datos":datosReserva
            })
        } catch (error) {
            response.status(400).json({
                "mensaje": "error en la consulta" + error,
                "datos":null
            })
        }
       
    }
    async EliminarReserva(request, response){
        let id = request.params.idReserva
        let objetoServicioReserva = new ServicioReserva()
        try {
            await objetoServicioReserva.eliminarReserva(id)
            response.status(200).json({
                "mensaje": "exito eliminando la reserva ",
                "datos":null
            })
        } catch (error) {
            response.status(400).json({
                "mensaje": "error en la consulta" + error,
                "datos":null
            })
        }
       
    }




    
}