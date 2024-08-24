const express = require("express")
const multer = require("multer")
const path = require("path")
const upload = multer({dest:'uploads/'})


const web = express()
const thread = path

web.use(express.static(thread.resolve('../frontEnd')
))



web.get('/', (req, res)=>{
  res.sendFile(thread.resolve('../frontEnd/homePage.html'))
})




web.listen(5000)

