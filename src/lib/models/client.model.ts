import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
    nombre: {
        type: String, 
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true
    },
    telefono: {
        type: Number,
        required:  true
    },
    notas: {
        type: String,
        required: true
    }
});

const ClientModel = mongoose.models.clientes || mongoose.model("clientes", clientSchema);

export default ClientModel;
