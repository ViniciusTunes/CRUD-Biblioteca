import autores from '../models/Autor.js';

class AutorController {
    // Método para fazer a listagem de todos os Autores.
    static async listarAutores(req, res) {
        try {
            const autoresResultados = await autores.find();
            res.status(200).json(autoresResultados);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao listar os Autores.' });
        }
    }

    // Método para fazer a listagem de um Autor pelo ID.
    static async listarAutorPorID(req, res) {
        try {
            const id = req.params.id;
            const autor = await autores.findById(id);
            res.status(200).json(autor);
        } catch (error) {
            res.status(400).json({ "error": error.message + " - Erro ao obter o Autor." });
        }
    }

    // Método para fazer o cadastro de um novo Autor - Promises.
    static cadastrarAutor = (req, res) => {
        let autor = new autores(req.body);

        autor.save()
            .then((autor) => {
                res.status(201).json(autor);
            })
            .catch((error) => {
                res.status(500).json({ "error": error.message + " - Erro ao cadastrar o Autor." });
            });
    }

    // Método para fazer a atualização de um livro pelo ID.
    static async atualizarAutor(req, res) {
        try {
            const id = req.params.id;
            await autores.findByIdAndUpdate(id, { $set: req.body });
            res.status(200).json({ "message": "Autor atualizado com sucesso." });
        } catch (error) {
            res.status(500).json({ "error": error.message + " - Erro ao atualizar o Autor." });
        }
    }

    // Método para fazer a exclusão de um livro pelo ID.
    static async excluirAutor(req, res) {
        try {
            const id = req.params.id;
            const resultado = await autores.findByIdAndDelete(id);
            if (resultado === null) {
                res.status(404).json({ "message": "ID do Autor não encontrado." });
            } else {
                res.status(200).json({ "message": "Autor excluído com sucesso." });
            }
        } catch (error) {
            res.status(500).json({ "error": error.message + " - Erro ao excluir o Autor." });
        }
    }
}

export default AutorController;