const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const todo = require('./todoModel');

// Setting up Mongoose ------------------------------------------
mongoose.connect('mongodb://127.0.0.1:27017/todo_LAB',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:true
})
console.log('Database Connected');


// Setting up the Express App -----------------------------------
const app = express();
app.use(cors());
app.use(express.json())

// Routing  -----------------------------------------------------

app.get('/',(req,res)=>{
    res.send("Hello World");
})


// Route for Creating the TODO
app.post('/create',async(req,res)=>{
    try{
        const todoN = new todo({data:req.body.textData});
        await todoN.save();
        res.send(todoN)
    }
    catch(e){
        res.status(400).send(e)
    }
})

// Route for Fetching all the TODO's
app.get('/todos',async(req,res)=>{
    try{
        const todos = await todo.find({});
        res.send(todos);
    }
    catch(e){
        res.status.send(e);
    }
})



// Route for updating the TODO's
app.patch('/update_todo',async(req,res)=>{
    try{
        const upTodo = await todo.findById(req.body.id);
        upTodo.data = req.body.textData;
        await upTodo.save();
        res.send();
    }   
    catch(e){
        res.status(400).send(e);
    }
})

// Route for deleting the TODO's
app.delete('/delete_todo',async(req,res)=>{
    try{
        const df = await todo.deleteOne({_id:req.body.id});
        res.send();
    }
    catch(e){
        res.status(400).send(e);
    }
})




// Starting the Local Host Server. :)
app.listen(5000,()=>{
    console.log('Server Started at Port 5000 :)');
})