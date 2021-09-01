//importanto rotas
const groupRouter = require('./routes/group-router')

//importa o express
const express = require('express');

//instancia um app express
const app = express();

//Porta
const PORT = 3333;

//Middleware
app.use(express.json());

//Rota principal para testar se funcionou
app.get('/', (req, res) => {
    res.send(`It's working!`);
});

//Demais rotas
app.use('/groups', groupRouter);

//Comando para levantar a aplicação
app.listen(PORT, () => {
    console.log(`Executando na porta ${PORT}`)
})