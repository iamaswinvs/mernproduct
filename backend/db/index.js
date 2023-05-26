const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://ASWINVS:Aswin123@cluster0.1gjyfad.mongodb.net/Products')
    .then(() => {
        console.log('MongoDb Atlas connection established')
    })
    .catch(err => {
        console.log(err)
    })