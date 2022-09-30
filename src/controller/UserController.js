const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async create(req, res){
        const body = req.body;
        let users = "";
        if(!Array.isArray(body)){
            users = {
                id: crypto.randomBytes(4).toString('HEX'),
                name: body.name,
                email: body.email,
                age: body.age,
                company: body.company}

        }else{
            users = body.map( user => {
                return {
                    id: crypto.randomBytes(4).toString('HEX'),
                    name: user.name,
                    email: user.email,
                    age: user.age,
                    company: user.company}
        });
        }
    const result = await connection('users').insert(users,['id']);
    res.json(result);
    },
    async list(req, res){
        const users = await connection('users').select('*');
        res.json(users);
    },
    async show(req, res){
        const {id} = req.params;
        const user = await connection('users').where('id',id).select('*');
        res.json(user);
    },
    async update(req, res){
        const {id} = req.params;
        const {name, email, age, company} = req.body;
        const result = await connection('users').where('id', id).update({
            name: name,
            email: email,
            age: age,
            company: company
        });
        res.json(result);
        
    },
    async delete(req, res){
        const {id} = req.params;
        const result = await connection('users').where('id', id).delete();
        res.json(result);
    }
}