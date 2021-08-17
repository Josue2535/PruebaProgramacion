const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/veterinaria',{ 
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
} )
    .then(db => console.log("DB is connect"))
    .catch((err)=> console.error(err))