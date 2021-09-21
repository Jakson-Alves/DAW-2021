//importar repository
const repository = require('../models/group-repository');

//Exporta os métodos
module.exports = {
    
    //método de get assincrono, acionado para retornar TODOS os registros
    index: async (req, res) => {
        try {

            //Chama o método do repository que retorna TODOS os registros
            const result = await repository.find();

            //Retorna os registros encontrados
            return res.json(result);

        } catch (error) {
            //Se der erro, retorna o erro com status 500
            return res.status(500).json({message: error.message})
        }
    },

    //Método que chama uma inserção do registro do banco
    create: async (req, res) => {

        const group = req.body;

        try { 
            //Chama a função insere o registro no banco de dados
            const result = await repository.create(group);

            //Pega o ID criado (em result[0]) e atribui no group.id
            group.id = result[0];

            //Retorna o registro inserido (completo, com ID) com o status 201
            return res.status(201).json(group);

        } catch (error) {
            //Se der erro, retorna o erro com status 500
            return res.status(500).json({message: error.message})
        }
    },      
    //Método que retorna o registro baseado com o ID passado por parâmetro
    show: async (req, res) => {

        try {
            //Busca um registro com o ID passado por parâmetro
            const result = await repository.findByid(req.params);

            //Testa se encontrou algum registro com o ID passado por parâmetro
            if (result.lenght === 0) {
                //Não encontrado
                return res.status(404).json({message: 'Not found'});
            }
            //Se não entrou no IF acima, significa que encontrou o registro, então retorna-o
            return res.json(result[0])

        } catch (error) {
            //Se der erro, retorna o erro com status 500
            return res.status(500).json({message: error.message})    
        }
    },
    //Atualiza um registro baseado no ID passado e retorna o registro alterado
    update: async (req, res) => {
        const group = req.body;

        try {

            //Busca um registro com o ID passado por parâmetro
            const result = await repository.findByid(req.params);

            //Testa se encontrou algum registro com o ID passado por parâmetro
            if (result.lenght === 0) {
                //Não encontrado
                return res.status(404).json({message: 'Not found'});
            }

            //Se não entrou no IF acima, significa que encontrou o registro e pode ser alterado
            await repository.update(group);

            //Retorna o registro alterado
            return res.json(group);

        } catch (error) {
            //Se der erro, retorna o erro com status 500
            return res.status(500).json({message: error.message})    
        }
    },
    //Método que baseado no ID passado verifica se o registro existe e o exclui, retornando o status 204
    delete: async (req, res) => {
        try {

            //Busca o registro com o ID passado por parâmetro
            const result = await repository.findByid(req.params);

            //Testa se encontrou algum registro com o ID passado por parâmetro
            if (result.lenght === 0) {
                //Não encontrado
                return res.status(404).json({message: 'Not found'});
            }
            //Se não entrou no IF acima, significa que encontrou o registro, então apaga-o
            await repository.delete(req.params);

            //Retorna para o cliente o status 204 -> Sem conteúdo
            return res.status(204).send('Registro excluído');


        } catch (error) {
            //Se der erro, retorna o erro com status 500
            return res.status(500).json({message: error.message})    
        }
    }
}