const express = require('express');
const router = require('./router');
const cors = require('cors');
const app = express();

const PORT = process.env.BACKEND_PORT;


app.use(cors({
    origin: '*'
}));
app.use(express.json());
app.use(router);



app.listen(PORT, () =>{
    console.log(`Running at port: ${PORT}`);
});