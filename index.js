const express = require('express')
let cookieParser = require('cookie-parser')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const cors = require('cors')
let app = express();
app.use(express.json())
app.use(cors())
app.use(cookieParser())
let UserModel = require("./models/user")


app.get('/', (req, res) => {
  res.send("Helllow")
});


app.post('/create', (req, res) => {
  let { name, password, username, email } = req.body;
  const saltRounds = 10;
  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(password, salt, async (err, hash) => {
      // Store hash in your password DB.
      let userCreated = await UserModel.create({
        username,
        name,
        email,
        password: hash,
      })
      var token = jwt.sign({ email }, 'Akash');
      res.cookie("token", token);
      res.json(userCreated);
    });
  });
});

app.listen(4000, () => {
  console.log("Server Start");

})