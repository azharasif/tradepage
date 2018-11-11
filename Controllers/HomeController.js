var prelogin = require('../Models/Prelogin');

exports.get=(req,res)=>
{
    res.render('Home');
}



exports.post = (req , res) =>{
  var p_user = new prelogin ({
     
    Primary_USER:req.body.P_USER,
    Primary_EMAIL :req.body.P_EMAIL

  })

  p_user.save().then(()=>{

res.redirect('/register');


  })

}