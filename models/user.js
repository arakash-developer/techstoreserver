const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://arakashdeveloper:LlmmKsEH1MNpF2R8@akash.f7phc.mongodb.net/akashdb")

let userSchema = mongoose.Schema ({
    name:String,
    email:String,
    messege:String
})

module.exports = mongoose.model('messeges',userSchema)