import express from "express";
import cors from "cors";
import { config } from "dotenv";
config();

// Importa o arquivo/módulo de rotas
import router from "./src/router.js";

const PORT = process.env.SERVER_PORT;
const HOSTNAME = process.env.SERVER_HOSTNAME;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("./public"));

// Utiliza o 'router.js' como middleware
app.use(router);

// Início do servidor
app.listen(PORT, () => {
    console.log(`Server running on http://${HOSTNAME}:${PORT}`);
});
