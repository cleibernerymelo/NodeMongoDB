// config inicial
const express = require('express')
const mongoose = require('mongoose')
const app = express()

// forma de ler json/middlewares

app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

// Rotas da api
const personRoutes = require('./routes/PersonRoutes')

app.use('/person', personRoutes)

// entregar uma porta
const DB_USER = 'cleibermelo'
const DB_PASSWORD = encodeURIComponent('Portug@5')

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.njoou.mongodb.net/bancodaapi?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log('Conectamos ao MongoDB!')
    app.listen(3000)
  })
  .catch(err => console.log(err))

// string de conexão
// mongodb+srv://cleibermelo:Portug@5@apicluster.njoou.mongodb.net/bancodaapi?retryWrites=true&w=majority
