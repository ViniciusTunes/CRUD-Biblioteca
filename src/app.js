import express from 'express';
import db from './config/dbConnect.js';
import routes from './routes/index.js';

// Conexão do Banco de Dados.
db.on("error", console.log.bind(console, "Erro de Conexão"));
db.once("open", () => console.log("Conexão com o MongoDB realizada com sucesso."));

// Faz com que consiga interpretar o JSON (Objeto).
const app = express();
app.use(express.json());
routes(app);

export default app;