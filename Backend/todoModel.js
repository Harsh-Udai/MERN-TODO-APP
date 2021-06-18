const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    data:{
        type:String,
        required: true,
    }
})

const todo = mongoose.model('todo',userSchema);
module.exports = todo;