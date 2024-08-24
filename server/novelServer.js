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


app.post('/', async (req, res) => {
  try {
    const data = await fs.readFile(path.resolve(__dirname, 'DB/info.json'), 'utf-8');
    const users = JSON.parse(data);

    const { Name: name, Password: password } = req.body;

    if (users[name] && users[name].password === password) {
      console.log('i am in');
      res.status(200).send('Login successful');
    } else {
      console.log('wrong one');
      res.status(401).send('Invalid credentials');
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Server error');
  }
});

app.listen(5000);
