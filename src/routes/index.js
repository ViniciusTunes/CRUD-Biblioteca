import express from 'express';
import livros from "./livrosRoutes.js";
import autores from "./autoresRoutes.js";
import funcionarios from "./funcionariosRoutes.js"

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send({titulo: "Curso de Node."});
    });
    app.use(
        express.json(),
        livros,
        autores,
        funcionarios
    )
}

export default routes;