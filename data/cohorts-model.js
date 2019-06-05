const knex = require('knex')
const knexConfig = require('../knexfile.js')

const db = knex(knexConfig.development)

module.exports = {
    find,
    findById,
    add,
    update,
    remove
};

function find(){
    console.log(db('cohorts'))
    return db('cohorts');
}

function findById(id){
    return db('cohorts')
    .where({id})
    .first();
}

function add(cohort){
    return db('cohorts')
    .insert(zoo,'id')
}

function update(id,changes){
    return db('cohorts')
    .where({id})
    .update(changes)
}

function remove(id){
    return db('cohorts')
    .where({id})
    .del()
}