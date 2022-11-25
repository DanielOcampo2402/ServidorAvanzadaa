import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const EsquemaReserva = new Schema({
    idHabitacion:{
        required:true,
        type:String
    },
    fechaEntrada:{
        required:true,
        type:Date
    },
    fechaSalida:{
        required:true,
        type:Date
    },
    numeroAdultos:{
        required:true,
        type:Number
    },
    numeroNiños:{
        required:true,
        type:Number
    },
    costoReserva:{
        required:true,
        type :Number
    }
  });

  export const modeloReserva = mongoose.model("reservas",EsquemaReserva)