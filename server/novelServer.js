const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require('fs').promises; 
const app = express();


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });

app.use(express.json());


app.use(express.static(path.resolve(__dirname, '../frontEnd')));

//redirections
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontEnd/homePage.html'));
});
app.get('/userProfile', (req, res)=>{
  res.sendFile(path.resolve(__dirname, '../frontEnd/userProfile.html'))
})


//login
app.post('/', async (req, res) => {
  try {
    const data = await fs.readFile(path.resolve(__dirname, 'DB/users.json'), 'utf-8');
    const users = JSON.parse(data);

    const { Name: name, Password: password } = req.body;

    if (users[name] && users[name].password === password) {
      res.json({login: "Login success, click outside of the login form to proceed", info: users[name].id, status: true, avatar: users.avatar})
    } else {
      res.json({login: "Password or Username may be incorrect"})
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Server error');
  }
});

//upload
//when doing upload make sure to use name of the input and not the type
app.post('/userProfile', upload.single('fileInput'), async (req, res) => {
  res.sendStatus(200)
});
app.listen(5000);

