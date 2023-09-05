import livros from '../models/Livro.js';

class LivroController {
    // Método para fazer a listagem de todos os Livros.
    static async listarLivros(req, res) {
        try {
            const livrosEncontrados = await livros.find()
                .populate("autor")
                .exec();
                res.status(200).json(livrosEncontrados)
        } catch (error) {
            res.status(500).json({ error: 'Erro ao listar Livros.' });
        }
    }
    

    // Método para fazer a listagem de um Livro pelo ID.
    static async listarLivroPorID(req, res) {
        try {
            const id = req.params.id;
            const livro = await livros.findById(id)
            .populate("autor", "nome")
            .exec()
            res.status(200).json(livro);
        } catch (error) {
            res.status(400).json({ "error": error.message + " - Erro ao obter o livro." });
        }
    }

    // Método para fazer o cadastro de um novo Livro - Promises.
    static cadastrarLivro = (req, res) => {
        let livro = new livros(req.body);

        livro.save()
            .then((livro) => {
                res.status(201).json(livro);
            })
            .catch((error) => {
                res.status(500).json({ "error": error.message + " - Erro ao cadastrar o livro." });
            });
    }

    // Método para fazer a atualização de um livro pelo ID.
    static async atualizarLivro(req, res) {
        try {
            const id = req.params.id;
            await livros.findByIdAndUpdate(id, { $set: req.body });
            res.status(200).json({ "message": "Livro atualizado com sucesso." });
        } catch (error) {
            res.status(500).json({ "error": error.message + " - Erro ao atualizar o livro." });
        }
    }

    // Método para fazer a exclusão de um livro pelo ID.
    static async excluirLivro(req, res) {
        try {
            const id = req.params.id;
            const resultado = await livros.findByIdAndDelete(id);
            if (resultado === null) {
                res.status(404).json({ "message": "ID do Livro não encontrado." });
            } else {
                res.status(200).json({ "message": "Livro excluído com sucesso." });
            }
        } catch (error) {
            res.status(500).json({ "error": error.message + " - Erro ao excluir o livro." });
        }
    }

    static async listarLivrosPorEditora(req, res) {
        try {
            const editora = req.query.editora;
            const livrosResultado = await livros.find({editora: editora});
            
            if(livrosResultado !== null && livrosResultado.length > 0) {
                res.status(200).json(livrosResultado);
            }
        } catch (error) {
             res.status(500).json({ "error": error.message + " - Erro interno do Servidor." });
        }
    }
}

export default LivroController;