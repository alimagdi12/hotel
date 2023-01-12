const express =require('express');
const path =require('path');
const app = express();
const bodyParser = require('body-parser')
const mainRoutes =require('./routes/mainRoutes')
app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))


app.use(mainRoutes)
app.use((req, res)=>{
    res.send(`page not found`)
})
app.listen(5000)