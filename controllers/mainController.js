exports.gethome=(req, res)=>{
    res.render('home',{
        item:''
    })
}
exports.getindex=(req,res)=>{
    res.render('index')
}

exports.getbooking=(req,res)=>{
    res.render('booking')
}
exports.getcontact=(req,res)=>{
    res.render('contact')
}


