//instanciar o express
const express = require('express');
const app = express();

//a aplicação pode receber um json
app.use(express.json());

//Rota principal
app.get('/', (reg, res) => {
    res.send(`It's working!`);
})

//Rota home
app.get('/home', (req, res) => {

    //pegar parametros por query usando ?
    const nome = req.query.nome;

    res.send(`Seja bem vindo ${nome}!`);
})

//Rota profile
//Utilizar normalmente quando precisa de um token
app.get('/profile/:username', (req, res) => {

    //pegar parametros diretamente no endereço
    const username = req.params.username;

    res.send(`Você está no perfil de ${username}!`);
})

//Rota login
//Body param
app.get('/login', (req, res) => {

    const user = req.body;
    const {password: username} = req.body;

    console.log(user)

    console.log('->', username);

    res.send(`Você está no perfil de ${user.username}!`);
})


app.listen(3000, () => {
    console.log('Running on port 3000');
});

