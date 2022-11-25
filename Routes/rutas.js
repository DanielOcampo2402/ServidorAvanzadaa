//Establece las rutas o endpoints de cada servicio ofrecido por mi API

import  express  from 'express'
import {ControladorHabitacion} from '../Controllers/ControladorHabitacion.js'
import{ControladorReserva} from '../Controllers/ControladorReserva.js'

let controladorHabitacion = new ControladorHabitacion()//usando el controlador de habitaciones
let controladorReserva = new ControladorReserva()//usando el controlador de reservas
export let rutasPersonalizadas = express.Router()

rutasPersonalizadas.get('/hoteles/habitaciones',controladorHabitacion.BuscarHabitaciones)
rutasPersonalizadas.get('/hoteles/habitacion/:idHabitacion',controladorHabitacion.BuscarHabitacionesPorId)
rutasPersonalizadas.post('/hoteles/habitacion', controladorHabitacion.RegistrarHabitacion)
rutasPersonalizadas.put('/hoteles/habitacion/:idHabitacion', controladorHabitacion.EditarHabitacion)
rutasPersonalizadas.get('/hoteles/reservas',controladorReserva.BuscarReserva)
rutasPersonalizadas.get('/hoteles/reserva/:idReserva',controladorReserva.BuscarReservaPorId)
rutasPersonalizadas.post('/hoteles/reserva',controladorReserva.RegistrarReserva)
rutasPersonalizadas.put('/hoteles/reserva/:idReserva',controladorReserva.EditarReserva)
rutasPersonalizadas.delete('/hoteles/reserva/:idReserva',controladorReserva.EliminarReserva)
