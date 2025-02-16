const mongoose = require('mongoose');

const connectDatabase = ()=>{
    mongoose.connect("mongodb+srv://Jeyanth:Jeyanth@atlascluster.jootpmm.mongodb.net/Smart",{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(con=>{
        console.log(`MongoDB is connected to the host: ${con.connection.host} `)
    })
}

module.exports = connectDatabase;