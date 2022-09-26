const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const connection = require('./database/connection');

router.get('/users',async(req, res)=>{
    const users = await connection('users').select('*');
    res.json(users);
});

router.post('/users/:id', async(req, res)=>{
    const {id} = req.params;
    const user = await connection('users').where('id',id).select('*');
    res.json(user);
});

router.post('/users',async(req, res)=>{
    const users = req.body.map( user => {
        return {
            id: crypto.randomBytes(4).toString('HEX'),
            name: user.name,
            email: user.email,
            age: user.age,
            company: user.company}
    });
    const result = await connection('users').insert(users,['id']);
    res.json(result);
});



module.exports = router;