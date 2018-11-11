const express = require('express');
const Router = express.Router();
const Login = require('../Controllers/LoginController');
const Register = require('../Controllers/RegisterController');
const Home = require('../Controllers/HomeController');
const profile=require('../Controllers/ProfileController');
const passport=require('passport');
const auth=require('../Middleware/passport_auth');

module.exports = Router;

//Home route
Router.get('/', require('../Controllers/HomeController').get);
Router.post('/', require('../Controllers/HomeController').post);


//Login Route
Router.get('/login' , auth.restric, require('../Controllers/LoginController').get);
Router.post('/login',passport.authenticate('local',{
    successRedirect:'/congrates',
    failureRedirect:'/login',
    failureFlash:true
}));
//Register route

Router.get('/register',Register.get);
Router.post('/register',Register.post);

Router.get('/profile',auth.islogin,profile.display);
Router.get('/logout',require('../Controllers/LogoutController'));
Router.get('/edit',auth.islogin,profile.edit);
Router.post('/edit',auth.islogin,profile.update);
Router.get('/delete',auth.islogin, profile.delete); 

Router.get('/getpost' ,auth.islogin, require('../Controllers/getPost').get);
Router.post('/getpost' ,auth.islogin, require('../Controllers/getPost').post);

Router.get('/display' ,auth.islogin, require('../Controllers/getPost').display);

Router.post('/comment' ,auth.islogin, require('../Controllers/getPost').comment);

Router.get('/congrates' , auth.islogin ,  require('../Controllers/Sucess').get);