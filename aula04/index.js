//instanciar o express
const express = require('express');
const produtoRouter = require('./routes/produto-router');

const app = express();

const PORT = 3000;

//Middleware
app.use(express.json());
app.use(produtoRouter);

//Rota principal
app.get('/', (req, res) => {
    res.send(`It's working!`);
});

app.listen(PORT, () => {
    console.log(`Executando na porta ${PORT}`)
})