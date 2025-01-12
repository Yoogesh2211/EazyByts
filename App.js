const bodyParser = require('body-parser');
const express=require('express');
const app=new express;
const portfolioDekhoRouter=require('./routers/portfolioDekhoRouter')

app.use(express.static('dist'))

const mongoose=require('mongoose');
const uri="mongodblink";

mongoose.connect(uri,{'dbName':'portfolioDekho'}).then(()=>{
    async function run(){

        app.use(bodyParser.json());
        app.use("/",portfolioDekhoRouter);

        app.listen(3000,()=>{
            console.log('listening at http://localhost:3000');
        })
    }
    run();
})