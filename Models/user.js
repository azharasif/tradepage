const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    First_Name: {
        type: String,
        trim: true
    },
    Last_Name: {
        type: String,
        trim: true
    },
    Business_name: {

        type: String,
        required: true
    },
    ABN:{
        type: Number,
        required: true
    },
    Adress: {
        type: String,
        required: true

    },
    Postal_Code: {
        type: Number,
        required: true
    },
    State: {

        type: String,
        required: true
    },
    Suburb: {

        type: String,
        required: true

    },
    Contact_1: {

        type: Number,
        required: true


    },
    Contact_2: {

        type: Number,
       


    },
    Email: {

        type: String,
        required: true,
        unique:true
    },
    Password: {
        type: String,
        required: true,
    },
 
});

UserSchema.pre('save', function (next) {
    var user = this;
    if (!user.isModified('Password')) next();

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user.Password, salt, (error, hash) => {

            user.Password = hash;
            next();

        })

    });

});

UserSchema.methods.comparePassword = function (temp_pass, callback) {
    var user = this;
    bcrypt.compare(temp_pass, user.Password, (err, Ismatch) => {
        if (err) {
            console.log(err);
            return callback(err);
        }

        console.log(Ismatch);
        callback(null, Ismatch);

    });
}
var UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;