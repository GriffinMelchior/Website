const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require('fs').promises; 
const app = express();


const upload = multer({ dest: 'uploads/' });


app.use(express.json());


app.use(express.static(path.resolve(__dirname, '../frontEnd')));


app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontEnd/homePage.html'));
});
app.get('/userProfile', (req, res)=>{
  res.sendFile(path.resolve(__dirname, '../frontEnd/userProfile.html'))
})



app.post('/', async (req, res) => {
  try {
    const data = await fs.readFile(path.resolve(__dirname, 'DB/users.json'), 'utf-8');
    const users = JSON.parse(data);

    const { Name: name, Password: password } = req.body;

    if (users[name] && users[name].password === password) {
      res.json({login: "Login success, click outside of the login form to proceed", info: users[name].id, status: true})
    } else {
      res.json({login: "Password or Username may be incorrect"})
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Server error');
  }
});

app.listen(5000);

