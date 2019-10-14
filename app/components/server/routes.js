var express         = require('express'),
    routes          = express.Router();
var userController  = require('./src/controller/user-controller');

var passport	    = require('passport');
var config      = require('./src/config/config');
 
routes.get('/', (req, res) => {
    return res.send('Hello, this is the API!');
});
 
routes.post('/register', userController.registerUser);
routes.post('/login', userController.loginUser);
 
routes.get('/special', passport.authenticate('jwt', { session: false }), (req, res) => {
    return res.json({ msg: `Hey ${req.user.email}! I open at the close.` });
});
 
module.exports = routes;