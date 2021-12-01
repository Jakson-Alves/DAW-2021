//importanto rotas
const groupRouter = require('./routes/group-router')
const productRouter = require('./routes/product-router')

//importa cors
const cors = require('cors');

//importa o express
const express = require('express');

//instancia um app express
const app = express();

//Porta
const PORT = 3333;

//Middleware
app.use(express.json());
app.use(cors());

//Rota principal para testar se funcionou
app.get('/', (req, res) => {
    res.send(`It's working!`);
});

//Demais rotas
app.use('/groups', groupRouter);
app.use('/products', productRouter);

//Comando para levantar a aplicacao
app.listen(PORT, () => {
    console.log(`Executando na porta ${PORT}`)
})