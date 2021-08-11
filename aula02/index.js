//instanciar o express
const express = require('express');
const app = express();

//Rota principal
app.get('/', (reg, res) => {
    res.send(`It's working!`);
})

app.listen(3000, () => {
    console.log('Running on port 3000');
});

