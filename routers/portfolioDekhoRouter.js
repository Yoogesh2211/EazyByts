const express=require('express');
//const userRouter=require('./userRouter')
const userModel=require('../models/userModel');

const portfolioDekhoRouter=express.Router();

//portfolioDekhoRouter.use('/user',userRouter);

portfolioDekhoRouter.post('/',(req,res)=>{
    async function login(value) {
        
        console.log('why login is working')
        /* try{
            const addAnimal=await animalModel.create(value);
            await addAnimal.save()
            console.log(addAnimal);
            res.json(addAnimal);
        }
        catch(err){
            res.status(400).json({message:err.message});
        } */
    }

    async function signup(value) {
        
        try{
            const addUser=await userModel.create(value);
            await addUser.save()
            console.log(addUser);
            res.json(addUser);
        }
        catch(err){
            res.status(400).json({message:err.message});
        }
    }
    const value=req.body;
    console.log(value.accountAccess)
    if(req.body!=null){
        if(value.accountAccess==false)
        {
            login(value);
        }
        else{
            signup(value);
        }
    }
})

module.exports=portfolioDekhoRouter;