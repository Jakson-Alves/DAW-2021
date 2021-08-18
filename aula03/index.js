//instanciar o express
const express = require('express');
const routes = require('./routes');
const app = express();

const PORT = 3000;

//Middleware
app.use(express.json());
app.use(routes);

//Rota principal
app.get('/', (req, res) => {
    res.send(`It's working!`);
});

//Rota principal
app.listen(PORT, () => {
    console.log(`Executando na porta ${PORT}`)
})