const express = require('express');
const Job = require('../Job-model');
const router = express.Router();

router.post('/', (req, res) => {
    let job = new Job(req.body);
    job.save()
        .then(job => {
            res.status(200).json({'job': 'job added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new job failed');
        });
});

module.exports = router;