const express = require('express');
require('dotenv').config({path:'.env'});
const router = require('./router');

const app = express();
app.use(express.json());
app.use(router);
const port = process.env.NODE_PORT;


app.listen(port, () =>{
    console.log(`Running at port: ${port}`);
});
