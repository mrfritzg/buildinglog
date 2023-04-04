// Require dotenv to setup environment variables in our server
require('dotenv').config()

// Load express
const express = require('express')

// Setup our Express app
const app = express()

// Load cors -> npm i cors
const cors = require('cors')

const PORT = 8080 

// Load the connectDB function
const connectDB = require('./config/db')

// Connect to database
connectDB()

const repairRoutes = require('./routes/RepairRoutes')

const { authorize } = require('./middleware/authMiddleware')

// Setup a middleware for receiving JSON inside our request objects (ex: POST, PUT)
app.use(express.json())

// Configure our app to allow other servers to communicate with it
app.use(cors())

// create a custom middleware for logging the HTTP Method and path 
app.use((req, res, next) => {
    console.log('inside middleware')
    console.log(`${req.method} ${req.path}`)
    next()
})

app.use('/repairs', repairRoutes)

// Setup an "index" route 
// app.get('/', (req, res) => {
//     res.redirect('/repairs')
// })

// Listen to the given port
app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})