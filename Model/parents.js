const mongoose = require('mongoose')
const parents = new mongoose.Schema({
    'empId': {type:String},
    'firstname': {type:String, required:true},
    'lastname': {type:String,required:true },
    'age':{type:Number , required: true},
    'phone no':{type:Number,required:true}
    

})
module.exports = mongoose.model('parents',parents)