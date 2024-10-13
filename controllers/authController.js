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
module.exports.busses_get = async (req,res) => {
    const {fromvalue,tovalue,date} = req.query;
    try{
        const result = await Driver.bus({fromvalue,tovalue,date});
        if(result){
            res.render('buses',{result});
        }
        else{
            res.status(404).send('No buses found');
        }
    }
    catch(err){
        console.error(err);
        res.status(500).send('Server error');
    }
}