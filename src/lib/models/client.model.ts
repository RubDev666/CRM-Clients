import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
    /*text: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    community: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Community",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    parentId: {
        type: String,
    },
    children: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Thread",
        },
    ],*/

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
