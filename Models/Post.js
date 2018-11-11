


const mongoose = require('mongoose');
const {Schema} = mongoose;  
var UserSchema =  new Schema({

    Title:{

        type:String
    },
Comment:[{

type:Schema.Types.ObjectId,
ref:'comment'


}],
Author:{
type:Schema.Types.ObjectId,
ref:'User'

}

}) 

var PostModel = mongoose.model('Post', UserSchema);
module.exports = PostModel;