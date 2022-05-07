const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const userController = require('../Controllers/user')
// const { engine } = require('express-handlebars')
app.use(bodyParser.json([]))
app.use(express.json())
// app.engine('handlebars', engine());
// app.set('view engine', 'handlebars');
// app.set('views', './views');
const multer = require('multer')

const diskStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `${__dirname}/public`)
    },
    filename: function (req, file, cb) {
        const ext = file.mimetype.split("/")[1]
    //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, `/public-${file.fieldname}- ${Date.now()}.${ext}`)
    }
  })
  
  const upload = multer({ storage: diskStorage })

app.post("/user",(req,res,next) =>{console.log("this is a idgrh") ;next()},userController.createUser)

app.get('/user',(req,res,next) =>{console.log("this is a idgrh") ;next()},userController.getAllUser)
// app.post('/user/:userId',userController.getUserById)
// app.post('/user/:userId',userController.updateUser)
// app.post('/user/:userId',userController.deleteUser)
app.post('/saveImage',upload.single('file'),userController.saveImage)

module.exports = app