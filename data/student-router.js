const router = require('express').Router();

const Students = require('./student-model.js')

router.get('/', (req,res) => {
    console.log(req.body)
    Students.find()
    .then(student => {
        console.log(student)
        res.status(200).json(student);
    })
    .catch(error => {
        res.status(500).json(error);
    }

    )
})

router.get('/:id', (req,res) => {
    Students.getAStudent(req.params.id)
    .then(student => {
        if(student)
        {
            res.status(200).json(student);
        }
        else {
            res.status(404).json({message:'zoo id not found'});
        }
    })
    .catch(error => {
        res.status(500).json(error);
    }

    )
})

router.post('/', (req,res) => {
    Students
    .add(req.body)
    .then(ids => {
        res.status(201).json(ids);
    })
    .catch(error => {
        res.status(500).json(error);
    }

    )
})

router.put('/:id', (req,res) => {
    Students
    .update(req.params.id,req.body)
    .then(count => {
        console.log('count ',count)
        if(count>0)
        {
            res.status(201).json(count);
        }
        else{
            res.status(404).json({message:'zoo id not found'});
        }
    })
    .catch(error => {
        console.log('update error ',error)
        res.status(500).json(error);
    }

    )
});

router.delete('/:id', (req,res) => {
    
    Students
    .remove(req.params.id)
    .then(count => {
        console.log('count ',count)
        if(count>0)
        {
            res.status(201).json(count);
        }
        else{
            res.status(404).json({message:'zoo id not found'});
        }
    })
    .catch(error => {
        console.log('update error ',error)
        res.status(500).json(error);
    }

    )
})

module.exports = router;