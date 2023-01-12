const express =require('express');
const bodyParser = require('body-parser')
const router = express.Router();
const mainController = require('../controllers/mainController');
// const mongoose = require('mongoose');
const User = require('../models/user')

router.get('/',mainController.getindex)
router.get('/booking',mainController.getbooking)
router.get('/contact',mainController.getcontact)



router.post('/',(req, res,next)=>{
    const user = new User(
        {
            userName: req.body.username,
            userMail: req.body.usermail
        }
    );
    user.save((err,result)=>{
        if(err){
            console.log(err)
            res.redirect('/')
            return
        }{
            console.log(result)
            res.redirect('/')
        }
    })
})

router.get('/home',(req, res,next)=>{
    User.find({},{userName: 'ali'},(error, result)=>{
        if(error){
            console.log(error)
            res.redirect('/home')
        }{
            console.log(result)
            res.render('home',{
                item:result,
            })
        }
    })
})


router.post('/update',((req,res,next)=>{
    const id = req.body.ID;
    const updated ={
        userName:req.body.newusername,
        userMail:req.body.newmail
    }
    User.updateOne({_id:id},{$set : updated},(err,result)=>{
        if(err){
            console.log(err)
            res.redirect('/')
            return
        }{
            console.log(result)
            res.redirect('/home')
        }
    })
}))

// mongoose.connect('mongodb://localhost/mongodb',(error)=>{
//     if(error){
//         console.log(error)
//     }{
//         console.log('DB is running')
//     }
// })


module.exports = router;
