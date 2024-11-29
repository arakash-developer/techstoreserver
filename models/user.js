const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://arakashdeveloper:LlmmKsEH1MNpF2R8@akash.f7phc.mongodb.net/techstoreDb")

let userSchema = mongoose.Schema ({
    username:String,
    name:String,
    email:String,
    password:String,
})

module.exports = mongoose.model('user',userSchema)