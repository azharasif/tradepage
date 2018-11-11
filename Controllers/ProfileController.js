
const UserModel=require('../Models/user');
exports.display = (req, res) => {

    res.render('profile',{User:req.user});
}
exports.edit = (req, res) => {

    res.render('Edit',{User:req.user});
}
exports.update = (req, res) => {

    console.log(req.user._id);
    UserModel.findByIdAndUpdate(req.user._id,{Email:req.body.EMAIL,Name: req.body.NAME}).then((user)=>
    {
        console.log(user);
    })
    res.send('updated');
   
}

exports.delete  = (req, res)=>{

    // UserModel.deleteOne({ _id:req.user._id }, function (err) {
    //     if (err) return console.log(err);
    //     else console.log('deleted')
    //     res.redirect('/register')

        
    //   });

  
    UserModel.deleteOne(req.user._id).then((user)=>
    {
        console.log("deleted");
        
    })


    res.redirect('/register');
   


}