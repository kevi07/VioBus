const mongoose = require('mongoose');
const schema = mongoose.Schema;

const driverSchema = new schema({
    name:{
        type:String
    },
    about:{
        type:String
    },
    file_upload:{
        type: Buffer,
        required: true
    },
    first_name:{
        type:String
    },
    last_name:{
        type:String
    },
    email:{type:String},
    country:{type:String},
    street:{type:String},
    city:{type:String},
    state:{type:String},
    pincode:{type:Number},
    pan:{type:Number},
    mobilenumber:{type:Number},
    busnumber:{type:String},
    timing:{type:Number},
    pickuppoint:{type:String},
    droppingpoint:{type:String},
    facilities:{type:[String]},
    passangers:{type:Number}
})


driverSchema.statics.bus = async function(fromvalue, tovalue, date){
    const res = await this.findOne({fromvalue});
    if(res){
        console.log('outputed')
    }
}

const Driver = mongoose.model('Driver',driverSchema);
module.exports = Driver;