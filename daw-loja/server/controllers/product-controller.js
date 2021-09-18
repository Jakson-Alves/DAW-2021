//importar repository
const repository = require('../models/product-repository');

module.exports = {
    
    //método acionado para retornar TODOS os registros
    //req de requisição e res de resposta
    index: async (req, res) => {
        try {
            //Chama o método do repository que retorna todos os registros
            const result = await repository.find();
            //Retorna os registros encontrados
            return res.json(result);

        } catch (error) {
            //Se der erro, retorna o erro status 500
            return res.status(500).json({message: error.message})
        }
    },

    //Método que chama uma inserção do registro no banco 
    create: async (req, res) => {

        const product = req.body;

        try {
            //Chama a função insere o registro no banco de dados
            const result = await repository.create(product);

            //Pedo o ID criado (em result[0]) e atribuo no result.id
            product.id = result[0];

            //Retorna o registro inserido (completo, com ID) com o status 201
            res.status(201).json(product);
        } catch (error) {
            //Se der erro, retorna o erro status 500
            return res.status(500).json({message: error.message})
        }
    },      

    show: async (req, res) => {

        try {

            //Busco um registro com o ID passado por parâmetro
            const result = await repository.findByid(req.params);

            //Testo se encontrou algum registro com o ID passado por parâmetro
            if (result.lenght === 0) {
                //Não encontrado
                return res.status(404).json({message: 'Not found'});
            }
            
            //Se não entrou no IF acima, significa que encontrou o registro, e o apresenta
            return res.json(result[0])

        } catch (error) {
            //Se der erro, retorna o erro status 500
            return res.status(500).json({message: error.message})
        }
    },

    update: async (req, res) => {
        const product = req.body;

        try {

            //Busco um registro com o ID passado por parâmetro
            const result = await repository.findByid(req.params);

            //Testo se encontrou algum registro com o ID passado por parâmetro
            if (result.lenght === 0) {
                //Não encontrado
                return res.status(404).json({message: 'Not found'});
            }
            
            //Se não entrou no IF acima, significa que encontrou o registro e pode ser alterado
            await repository.update(product);

            //Retorn o registro alterado
            res.json(product)

        } catch (error) {
            //Se der erro, retorna o erro status 500
            return res.status(500).json({message: error.message})
        }
    },

    delete: async (req, res) => {
        try {
            //Busco um registro com o ID passado por parâmetro
            const result = await repository.findByid(req.params);

            //Testo se encontrou algum registro com o ID passado por parâmetro
            if (result.lenght === 0) {
                //Não encontrado
                return res.status(404).json({message: 'Not found'});
            }
             //Se não entrou no IF acima, significa que encontrou o registro e pode ser apagado
            await repository.delete(req.params);

            //retorna o status 204 -> Sem conteúdo
            return res.status(204).json();


        } catch (error) {
            //Se der erro, retorna o erro status 500
            return res.status(500).json({message: error.message})    
        }
    }
}