const knex = require('../database');

module.exports = {
    //select
    find: () => {
        //select * from product;
        return knex.select('p.*', 'g.name as group_name').from('product as p').innerJoin('group as g', 'g.id', 'p.group_id');
    },

    //select * from product where id = ?
    findByid: (params) => {
        return knex.select().from('product').where('id', params.id);
    },

    //insert
    create: (params) => {
        //insert into product(name, description, price, likes, group_id) values (params.name, params.description, params.price, params.likes)
        return knex.insert(params).into('product');
    },

    //update
    update: (params) => {
        return knex('product').update(params).where('id', params.id);
    },

    //delete
    delete: (params) => {
        return knex('product').del().where('id', params.id);
    }
}




