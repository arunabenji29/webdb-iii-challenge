const express = require('express')
const helmet = require('helmet')
// const knex = require('knex')
// const knexConfig = require('./knexfile.js')
const CohortRouter  = require('./data/cohorts-router.js');

// const db = knex(knexConfig.development);

const server  = express();

server.use(helmet());

server.use(express.json());

server.get('/cohorts',CohortRouter)



const port = 3400
server.listen(port, ()=> 
    console.log(`API running at http://localhost:${port}`)
)