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

// Configure our app to allow other servers to communicate with it
app.use(cors())

// Setup a middleware for receiving JSON inside our request objects (ex: POST, PUT)
app.use(express.json())


// Load the create engine -> (npm install jsx-view-engine react react-dom)
const { createEngine } = require('jsx-view-engine')

// Load the method-override middleware
const methodOverride = require('method-override')

const repairRoutes = require('./routes/RepairRoutes')

// Configure the view engine and look for files ending in jsx
app.set('view engine', 'jsx')

// Create the engine and accept files ending in jsx
app.engine('jsx', createEngine())

// a middleware that formats the form data (currently a string that looks like query params) into a object we can use
app.use(express.urlencoded({ extended: true }))

// hack into our form and give it more HTTP methods (like DELETE and PUT)
app.use(methodOverride('_method'))

// look for static files (like css) in the public folder
app.use(express.static('public'))

// create a custom middleware for logging the HTTP Method and path 
app.use((req, res, next) => {
    console.log('inside middleware')
    console.log(`${req.method} ${req.path}`)
    next()
})

//
app.use('/repairs', repairRoutes)

// Setup an "index" route for vegetables
app.get('/', (req, res) => {
    res.redirect('/repairs')
})

// Listen to the given port
app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})