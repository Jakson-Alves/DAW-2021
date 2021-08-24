const produtos = [
    {id: 1, nome: 'Suco de laranja', litros: 0.5, preco: 3},
    {id: 2, nome: 'Suco de uva', litros: 1, preco: 5},
    {id: 3, nome: 'Suco de abacaxi', litros: 0.5, preco: 3}
];

//Esse cara é um json
module.exports = {


    index: (req, res) => {
        //retorna o res com json 
        return res.json(produtos);
    },

    show: (req, res) => {
        const id = req.params.id;
        const index = id -1;
    
        res.send(produtos[index]);
    },

    create: (req, res) => {
        const produto = req.body;
    
        //Adiconar o produto recebido por parametro no vetor produtos
        produtos.push(produto);
    
        res.send(produto);
    }


}