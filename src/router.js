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
    const {name, email, idade, empresa} = req.body;
    const id = crypto.randomBytes(4).toString('HEX');
    await connection('users').insert({
        id,
        name,
        email,
        idade,
        empresa
    });
    res.json({id});
});


module.exports = router;