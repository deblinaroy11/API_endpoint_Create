const express = require('express')
const data = require('./dummy')

const api = express()

const HOST = 'localhost'
const PORT = 8888

api.get('/', (req,res) => {
    res.send('<h1>Welcome to this API!</h1>')
})

api.get('/people', (req,res) => {
    res.status(200).json(data)
})

api.post('/', (req,res) =>{
    res.send('<h2> This is Done By Post Method!</h2>')
})

api.post('/register', (req,res) =>{
    res.sendStatus(201)
})

api.put('/user/Deblina', (req,res) =>{
    res.sendStatus(200)
})

api.patch('/user/deblina', (req,res) =>{
    res.sendStatus(200)
})

api.delete('/user/deblina', (req,res) =>{
    res.sendStatus(200)
})


api.listen(PORT, () => console.log(`API running at ${HOST}:${PORT}!`))
