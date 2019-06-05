const express = require('express')
const helmet = require('helmet')
// const knex = require('knex')
// const knexConfig = require('./knexfile.js')
const CohortRouter  = require('./data/cohorts-router.js');
const StudentRouter  = require('./data/student-router.js');
// const db = knex(knexConfig.development);

const server  = express();

server.use(helmet());

server.use(express.json());

server.use('/api/cohorts',CohortRouter)
server.use('/api/students',StudentRouter)


const port = 3400
server.listen(port, ()=> 
    console.log(`API running at http://localhost:${port}`)
)