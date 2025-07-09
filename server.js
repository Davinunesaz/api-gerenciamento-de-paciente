import express from "express";
import paciente from "./router/pacientes.router.js";
import cors from 'cors';
const app = express();
const PORT = 3001; 

app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use(express.json());

app.use("/api", paciente);


app.listen(PORT, () => {
    console.log(`Rodando o Servidor na porta ${PORT}`);
  });