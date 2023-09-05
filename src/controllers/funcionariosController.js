import funcionarios from '../models/Funcionario.js';

class FuncionarioController {
    // Método para fazer a listagem de todos os Funcionarios.
    static async listarFuncionarios(req, res) {
        try {
            const funcionariosResultados = await funcionarios.find();
            res.status(200).json(funcionariosResultados);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao listar os Funcionarios.' });
        }
    }

    // Método para fazer a listagem de um Funcionario pelo ID.
    static async listarFuncionarioPorID(req, res) {
        try {
            const id = req.params.id;
            const funcionario = await funcionarios.findById(id);
            res.status(200).json(funcionario);
        } catch (error) {
            res.status(400).json({ "error": error.message + " - Erro ao obter o Funcionario." });
        }
    }

    // Método para fazer o cadastro de um novo Autor - Promises.
    static cadastrarFuncionario = (req, res) => {
        let funcionario = new funcionarios(req.body);

        funcionario.save()
            .then((autor) => {
                res.status(201).json(autor);
            })
            .catch((error) => {
                res.status(500).json({ "error": error.message + " - Erro ao cadastrar o Funcionario." });
            });
    }

    // Método para fazer a atualização de um livro pelo ID.
    static async atualizarFuncionario(req, res) {
        try {
            const id = req.params.id;
            await funcionarios.findByIdAndUpdate(id, { $set: req.body });
            res.status(200).json({ "message": "Funcionario atualizado com sucesso." });
        } catch (error) {
            res.status(500).json({ "error": error.message + " - Erro ao atualizar o Funcionario." });
        }
    }

    // Método para fazer a exclusão de um livro pelo ID.
    static async excluirFuncionario(req, res) {
        try {
            const id = req.params.id;
            const resultado = await funcionarios.findByIdAndDelete(id);
            if (resultado === null) {
                res.status(404).json({ "message": "ID do Funcionario não encontrado." });
            } else {
                res.status(200).json({ "message": "Funcionario excluído com sucesso." });
            }
        } catch (error) {
            res.status(500).json({ "error": error.message + " - Erro ao excluir o Funcionario." });
        }
    }
}

export default FuncionarioController;