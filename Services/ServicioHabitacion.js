import {modeloHabitacion} from '../Models/ModeloHabitacion.js'


export class ServicioHabitacion{

    async buscarHabitaciones(){
        let habitaciones = await modeloHabitacion.find()
        return habitaciones
    }
    
    async buscarHabitacionesPorId(id){

        let habitacion = await modeloHabitacion.findById(id)
        return habitacion
    }

    async agregarHabitacionEnBD(datos){
        let datosValidados = new modeloHabitacion(datos)
        return await datosValidados.save()    
    }
    
    async editarHabitacion(id,datos){
        return await modeloHabitacion.findByIdAndUpdate(id,datos)
    }


}