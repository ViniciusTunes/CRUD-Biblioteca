import express from 'express';
import FuncionarioController from '../controllers/funcionariosController.js';

const router = express.Router();

router
    .get("/funcionarios", FuncionarioController.listarFuncionarios)
    .get("/funcionarios/:id", FuncionarioController.listarFuncionarioPorID)
    .post("/funcionarios", FuncionarioController.cadastrarFuncionario)
    .put("/funcionarios/:id", FuncionarioController.atualizarFuncionario)
    .delete("/funcionarios/:id", FuncionarioController.excluirFuncionario)

export default router;