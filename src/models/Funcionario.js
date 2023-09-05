import mongoose from "mongoose";

const FuncionarioSchema = new mongoose.Schema({
    id: { type: String },
    nome: { type: String, required: true },
    cargo: { type: String, required: true },
    permissao: { type: String, required: true},
    salario: {type: Number, required: true},
    estadocivil: {type: String, required: true}
},
{
    versionKey: false
});

const funcionarios = mongoose.model("funcionarios", FuncionarioSchema);

export default funcionarios;