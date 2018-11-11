const UserModel = require('../Models/user')



exports.get = (req, res) => {
    res.render('Register');
}




exports.post = (req , res) =>{
    var user = new UserModel({

        First_Name:req.body.F_NAME,
        Last_Name:req.body.L_NAME,
        Business_name:req.body.B_NAME,
        ABN:req.body.ABN,
        Adress:req.body.S_ADRESS,
        Postal_Code:req.body.P_CODE,
        State:req.body.STATE,
        Suburb:req.body.SUBURB,
        Contact_1:req.body.CONTACT,
        Contact_2:req.body.CONTACT2,
        Email:req.body.EMAIL,
        Password:req.body.PASS
    });

    user.save().then(()=>{

  res.redirect('/');
  
  
    })
  
  }