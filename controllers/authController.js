const Driver = require('../models/driver');

module.exports.login_get = (req,res) => {
    res.render('login')
}
module.exports.login_post = (req,res) => {
    res.render('login')
}
module.exports.signup_get = (req,res) => {
    res.render('signup')
}
module.exports.signup_post = (req,res) => {
    res.render('signup')
}
module.exports.driverrole_get = (req,res) => {
    res.render('driverrole')
}
module.exports.driverrole_post = (req,res) => {
    const driver = new Driver(req.body);
    
    driver.save()
    .then((result) => {
        res.redirect('/');
    })
    .catch((err) => {
        console.log(err);
    })
}
module.exports.busses_get = (req,res) => {
    res.render('buses')
}