const express = require('express')
const app = express()
const path = require('path')

//setting
app.set('port', 3000)

//middlewares
app.use(express.static(path.join(__dirname, 'public')))

console.log(__dirname)

//routes
app.get('/', (req, res)=>{
    res.send('Bienvenido')
})

app.listen(app.get('port'), ()=>{
    console.log(`Aplicacion corriendo en el puerto ${app.get('port')}`)
})