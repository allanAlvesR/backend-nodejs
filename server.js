const express = require('express');
require('dotenv').config();
const app = express();
app.use(express.json());

const port = process.env.NODE_PORT;



app.get('/users',(req, res)=>{
    const params = req.query;
    console.log(params);
    res.json(params);
});

app.post('/users/:id', (req, res)=>{
    const params = req.params;
    console.log(params);
    res.json(params);
});

app.post('/users',(req, res)=>{
    const params = req.body;
    console.log(params);
    res.json(params);
});


app.listen(port, () =>{
    console.log(`Running at port: ${port}`);
});
