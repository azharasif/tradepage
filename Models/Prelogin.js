
const mongoose  = require("mongoose");

var Schema = mongoose.Schema;

var PreloginSchema  = new Schema ({

Primary_USER:{

    type:String,
    required:true,


},
Primary_EMAIL:{

    type:String,
    required:true

}

})


var PreloginModel =  mongoose.model('Prelogin' , PreloginSchema);

module.exports = PreloginModel;

