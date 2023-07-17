const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/bloodbank')

const Donor=mongoose.model('Donor',
{
    name:String,
    gender:String,
    dob:String,
    blood:String,
    district:String,
    place:String,
    email:String,
    mobile:Number,
    last:String,
    username:String,
    psw:String,
    conpsw:String

}
)

const Admin=mongoose.model('Admin',
{
    uname:String,
    pswd:String
})


module.exports={
    Donor,Admin
}