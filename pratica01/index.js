//importa o express
const express = require('express');

//instancia um app express
const app = express();

//Middleware
app.use(express.json());

//Rota raiz
app.get('/',(req, res) => {
    res.send(`It's working!`);
});

//Porta
const PORT = 3333;

//Iniciar o serviço
app.listen(PORT, () => {
    console.log(`Executando na porta ${PORT}`);
});