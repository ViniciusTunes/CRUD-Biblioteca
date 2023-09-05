import mongoose from "mongoose";

const AutorSchema = new mongoose.Schema({
    id: { type: String },
    nome: { type: String, required: true },
    obras: { type: String, required: true},
    idade: { type: Number, required: true },
    nacionalidade: { type: String, required: true },
    curiosidade: { type: String }
},
{
    versionKey: false
});

const autores = mongoose.model("autores", AutorSchema);

export default autores;