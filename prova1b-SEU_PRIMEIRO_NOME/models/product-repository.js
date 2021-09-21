const knex = require('../database');

module.exports = {
    
    find: () => {
        //select * from product
        return knex.select('p.*', 'g.name as group_name').from('product as p').innerJoin('group as g', 'g.id', 'p.group_id');
    },

    findById: (params) => {
        //select * from product where id = params.id
        return knex.select('p.*', 'g.name as group_name').from('product as p').innerJoin('group as g', 'g.id', 'p.group_id').where('p.id', params.id);
    }, 

    create: (params) => {
        //insert into product(name, description, price, likes, group_id) values (params.name, params.description, params.price, params.likes, price.group_id)
        return knex.insert(params).into('product');
    },

    update: (params) => {
        
        return knex('product').update(params).where('id', params.id);
    },

    delete: (params) => {
        return knex('product').del().where('id', params.id);
    }
}