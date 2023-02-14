const express = require('express')
const cors = require('cors')
const conectarDB = require('./config/db')
// Creamos el servidor
const app = express()

app.use(cors())

//CONECCION ALA BASE DE DATOS
conectarDB();

app.use(express.json());
app.use('/api/productos', require('./routes/product.routes'))

//Definimos la ruta del servidor
// app.get('/', ())
app.listen(4000, () => {
    console.log('Aplicacion escuchando por el puerto',4000)
})