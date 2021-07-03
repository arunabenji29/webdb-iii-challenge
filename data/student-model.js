const knex = require('knex')
const knexConfig = require('../knexfile.js')

const db = knex(knexConfig.development)

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
    getAStudent
};

function find(){
    console.log(db('students'))
    return db('students');
}

function findById(id){
    return db('students')
    .where({id})
    .first();
}

function getAStudent(id){
    return db.select('students.id','students.name','cohorts.name as cohort')
    .from('students')
    .innerJoin('cohorts', 'cohorts.id', 'students.cohort_id')
    .where({'students.id':id})
    .first();
}

function add(student){
    return db('students')
    .insert(student,'id')
}

function update(id,changes){
    return db('students')
    .where({id})
    .update(changes)
}

function remove(id){
    return db('students')
    .where({id})
    .del()
}