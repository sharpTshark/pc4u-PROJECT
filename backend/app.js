// modules
const express = require('express')
const app = express()
const cors = require('cors')
const sqlite3 = require('sqlite3').verbose()

// routes
const userRoutes = require('./routes/user.routes')
const shopRoutes = require('./routes/shop.routes')

// middleware
app.use(express.json())
app.use(cors())

app.use('/user', userRoutes)
app.use('/shop', shopRoutes)

app.listen(3000, () => console.log('app is listening on port 3000'))
