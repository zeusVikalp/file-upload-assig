const mongoose = require('mongoose')
const user = new mongoose.Schema({
    'firstname': {type:String, required:true},
    'lastname': {type:String,required:true },
    'age':{type:Number , required: true},
    'phone no':{type:Number,required:true}
    

})
module.exports = mongoose.model('user',user)