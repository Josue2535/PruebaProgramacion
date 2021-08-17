const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(morgan('dev'))
app.use("/api/user", require('./routes/Usuario.routes'))
app.use(express.json());
app.use(express.urlencoded({ extended: false}))


app.set('port',process.env.PORT || 3000)
module.exports = app;