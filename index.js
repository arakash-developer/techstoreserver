const express = require('express')
const cors = require('cors')
let app = express();
app.use(express.json())
app.use(cors())
let UserModel = require("./models/user")


app.get('/', (req, res) => {
  res.send("Helllow")
});
app.post('/create', async (req, res) => {
  let { name, messege, email } = req.body;
  let userCreated = await UserModel.create({
    name,
    email,
    messege,
  })
  res.json(userCreated);
});
app.get('/read', async (req, res) => {
  let messege = await UserModel.find();
  res.json({
    messege
  });
});
app.delete('/delete/:id', async (req, res) => {
  let deleted = await UserModel.findOneAndDelete({_id:req.params.id});
  // res.redirect("/messeges");
  res.json(deleted);
});

app.listen(3000, () => {
  console.log("Server Start");

})