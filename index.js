const express=require('express')

const server=express()

const cors=require('cors')

server.use(cors({origin:'http://localhost:3000'}))

server.use(express.json())

const logics = require('./services/logics')

server.listen(8081,()=>{
    console.log('_____server run at port 8081_____');
})


server.post('/logIn',(req,res)=>{
    logics.logIn(req.body.username,req.body.psw).then(result=>{
        res.status(result.statusCode).json(result)
    })
})

server.post('/registerDonor',(req,res)=>{
    logics.registerDonor(req.body.name,req.body.gender,req.body.dob,req.body.blood,req.body.district,req.body.place,req.body.email,req.body.mobile,req.body.last,req.body.username,req.body.psw,req.body.conpsw).then(result=>{
        res.status(result.statusCode).json(result)
    })
})

server.get('/getDonor/:id',(req,res)=>{
    logics.getDonor(req.params.id).then(result=>{
        res.status(result.statusCode).json(result)
    })
})

// server.post('/searchDonor',(req,res)=>{
//     logics.searchDonor(req.body.blood,req.body.district).then(result=>{
//         res.status(result.statusCode).json(result)
//     })
// })

// server.get('/donorsList/:id',(req,res)=>{
//     logics.donorsList(req.params.id).then(result=>{
//         res.status(result.statusCode).json(result)
//     })
// })


server.post('/donorsList',(req,res)=>{
    logics.donorsList(req.body.blood,req.body.district).then(result=>{
        res.status(result.statusCode).json(result)
    })
})

server.post('/updateDonor',(req,res)=>{
    logics.updateDonor(req.body.params1,req.body.name,req.body.gender,req.body.district,req.body.place,req.body.email,req.body.mobile,req.body.last).then(result=>{
        res.status(result.statusCode).json(result)
    })
})

server.delete('/deleteProfile/:id',(req,res)=>{
    logics.deleteProfile(req.params.id).then(result=>{
        res.status(result.statusCode).json(result)
    })
})

server.post('/adminLogin',(req,res)=>{
    logics.adminLogin(req.body.uname,req.body.pswd).then(result=>{
        res.status(result.statusCode).json(result)
    })
})

server.get('/getDonors',(req,res)=>{
    logics.getAllDonors().then(result=>{
        res.status(result.statusCode).json(result)
    })
})

server.delete('/deleteDonor/:id',(req,res)=>{
    logics.deleteDonor(req.params.id).then(result=>{
        res.status(result.statusCode).json(result)
    })
})