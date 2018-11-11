

const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var commentSchema  = new Schema({

Title:{

    type:String
},

Author:{

    type:Schema.Types.ObjectId,
    ref:'User'

}



})

var commentModel = mongoose.model('comment'  , commentSchema )

module.exports = commentModel;
