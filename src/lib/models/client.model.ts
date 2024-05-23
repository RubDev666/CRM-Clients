import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required:  true
    },
    notes: {
        type: String,
        required: true
    }
});

const ClientModel = mongoose.models.clients || mongoose.model("clients", clientSchema);

export default ClientModel;
