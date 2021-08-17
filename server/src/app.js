const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(morgan('dev'))

app.use(express.json());
app.use(express.urlencoded({ extended: false}))
app.use("/api/user", require('./routes/Usuario.routes'))
app.use("/api/mascota", require('./routes/Mascota.routes'))
app.use("/api/historia", require('./routes/Historia_Clinica.routes'))
app.use("/api/detalle", require('./routes/Detalle_Historia_Clinica.routes'))
app.use("/api/colaborador", require('./routes/Colaborador.routes'))


app.set('port',process.env.PORT || 3000)
module.exports = app;