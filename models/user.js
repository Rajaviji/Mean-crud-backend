const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {type : String},
    email : {type :String},
    contact_number : {type: String},
    age : {type : Number},
    password : {type : String}
})

module.exports = mongoose.model('user',userSchema,'user');