
const db = require('./db')


logIn = (username, psw) => {
    return db.Donor.findOne({ username, psw }).then(donor => {
        if (donor) {
            return {
                status: true,
                message: "Login success",
                statusCode: 200,
                username
            }
        }
        else {
            return {
                status: false,
                message: "Incorrect username or password",
                statusCode: 400
            }
        }
    })
}

registerDonor = (name, gender, dob, blood, district, place, email, mobile, last, username, psw, conpsw) => {
    return db.Donor.findOne({ username }).then(donor => {
        if (donor) {
            return {
                status: false,
                message: "Username exist. Please use a different username",
                statusCode: 400
            }
        }
        else {

            newDonor = new db.Donor(
                {
                    name,
                    gender,
                    dob,
                    blood,
                    district,
                    place,
                    email,
                    mobile,
                    last,
                    username,
                    psw,
                    conpsw
                }
            )
            newDonor.save()
            return {
                status: true,
                message: "Successfully registered as a Donor",
                statusCode: 200

            }
        }
    })
}

getDonor = (id) => {
    return db.Donor.findOne({ username: id }).then(donor => {
        if (donor) {
            return {
                status: true,
                statusCode: 200,
                message: donor
            }
        }
        else {
            return {
                status: true,
                statusCode: 400,
                message: ''
            }
        }
    })
}

// searchDonor=(blood,district)=>{
//     return db.Donor.findOne({blood,district}).then(donors=>{
//         if (donors){
//             return{
//                 status:true,
//                 statusCode:200,
//                 blood
//             }
//         }
//         else{
//             return {
//                 status: false,
//                 statusCode: 400,
//                 message: 'No donor found'
//             }
//         }
//     })
// }


donorsList = (blood, district) => {
    return db.Donor.find({ blood, district }).then(donors => {
        if (donors) {
            return {
                status: true,
                statusCode: 200,
                donors
            }
        }
        else {
            return {
                status: false,
                statusCode: 400,
                message: 'No data'
            }
        }
    })
}

updateDonor = (params1, name, gender, district, place, email, mobile, last) => {
    return db.Donor.findOne({ username: params1 }).then(donor => {
        if (donor) {

            donor.name = name
            donor.gender = gender
            donor.district = district
            donor.place = place
            donor.email = email
            donor.mobile = mobile
            donor.last = last

            donor.save()

            return {
                status: true,
                message: "Profile Updated",
                statusCode: 200
            }
        }
        else {
            return {
                status: false,
                message: "Not Found",
                statusCode: 400

            }
        }
    })
}


deleteProfile = (id) => {
    return db.Donor.deleteOne({ username: id }).then(user => {
        if (user) {

            return {
                status: true,
                message: "Profile Deleted",
                statusCode: 200,
            }
        }
        else {
            return {
                status: false,
                message: "No profile found",
                statusCode: 400
            }
        }
    })
}

adminLogin = (uname, pswd) => {
    return db.Admin.findOne({ uname, pswd }).then(admin => {
        if (admin) {
            return {
                status: true,
                message: "Login success",
                statusCode: 200,
                uname

            }
        }
        else {
            return {
                status: false,
                message: "No admin found",
                statusCode: 400
            }
        }
    })
}

getAllDonors=()=>{
    return db.Donor.find().then(donors=>{
        if(donors){
            return{
                status:true,
                message:donors,
                statusCode:200
            }
        }
        else {
            return {
                status: false,
                message: "No donors found",
                statusCode: 400
            }
        }
    })
}

deleteDonor = (id) => {
    return db.Donor.deleteOne({username:id}).then(user => {
        if (user) {

            return {
                status: true,
                message: "Donor Deleted",
                statusCode: 200,
            }
        }
        else {
            return {
                status: false,
                message: "No donor found",
                statusCode: 400
            }
        }
    })
}
module.exports = {
    logIn, registerDonor, getDonor, donorsList, updateDonor, deleteProfile, adminLogin,getAllDonors,deleteDonor
}