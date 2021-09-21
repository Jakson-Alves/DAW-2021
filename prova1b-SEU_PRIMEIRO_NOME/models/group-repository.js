const knex = require('../database');

module.exports = {

    //select
    find: () => {
        //select * from group;
        return knex.select().from('group');
    },

    //select * from group where id = ?
    findByid: (params) => {
        return knex.select().from('group').where('id', params.id);
    },

    //insert
    create: (params) => {
        return knex.insert(params).into('group');
    },

    //update
    update: (params) => {
        return knex('group').update(params).where('id', params.id);
    },

    //delete
    delete: (params) => {
        return knex('group').del().where('id', params.id);
    }
}




