const repository = require('../models/brand-repository');

module.exports = {

    //Método acionado para retornar TODOS os registro
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

    //Método que que chama uma inserção do registro no banco
    create: async (req, res) => {
        const brand = req.body;

        try {

            //Chamo a função insere o registro no banco de dados
            const result = await repository.create(brand);

            //Pego o ID criado (em result[0]) e atribuo no brand.id
            brand.id = result[0];

            //Retorno o registro inserido (completo, com ID) com o status 201
            res.status(201).json(brand);
            
            
        } catch (error) {
            //Se der erro, retorna o erro com status 500
            return res.status(500).json({message: error.message})
        }
    },

    //Método que retorna o registro baseado no ID passado por parâmetro
    show: async (req, res) => {

        try {

            //Busco um registro com o ID passado por parâmetro
            const result = await repository.findById(req.params);

            //Testo se encontrou algum registro com o ID passado por parâmetro
            if (result.length === 0) {
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

    update: async (req, res) => {
        const brand = req.body;

        try {

            //Busco um registro com o ID passado por parâmetro
            const result = await repository.findById(req.params);

            //Testo se encontrou algum registro com o ID passado por parâmetro
            if (result.length === 0) {
                //Não encontrado
                return res.status(404).json({message: 'Not found'});
            }

            //Se não entrou no IF acima, significa que encontrou o registro e pode ser alterado
            await repository.update(brand);

            //Retorno o registro alterado
            res.json(brand);
            
        } catch (error) {
            //Se der erro, retorna o erro com status 500
            return res.status(500).json({message: error.message})
        }
    },

    delete: async (req, res) => {
        try {

            //Busco um registro com o ID passado por parâmetro
            const result = await repository.findById(req.params);

            //Testo se encontrou algum registro com o ID passado por parâmetro
            if (result.length === 0) {
                //Não encontrado
                return res.status(404).json({message: 'Not found'});
            }

            //Se não entrou no IF acima, significa que encontrou o registro, então apaga-o
            await repository.delete(req.params)

            //Retorno para o cliente o status 204 -> Sem conteúdo
            return res.status(204).json();
            
        } catch (error) {
            //Se der erro, retorna o erro com status 500
            return res.status(500).json({message: error.message})
        }
    }

}