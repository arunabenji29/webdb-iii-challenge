const knex = require('knex')
const knexConfig = require('../knexfile.js')

const db = knex(knexConfig.development)

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
    getStudents
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

function getStudents(id){
    // return db.select('students.id','students.name')
    // .from('students')
    // .innerJoin('cohorts',{'students.cohort_id':'cohorts.id'})
    return db('students')
    .where({'cohort_id':id})

}

function add(cohort){
    return db('cohorts')
    .insert(cohort,'id')
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