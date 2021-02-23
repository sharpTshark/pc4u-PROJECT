// modules
const express = require('express')
const app = express()
const cors = require('cors')
const sqlite3 = require('sqlite3').verbose()

const verifyJwt = require('./jwtFunctions')

// routes
const userRoutes = require('./routes/user.routes')
const shopRoutes = require('./routes/shop.routes')

// middleware
app.use(express.json())
app.use(cors())

app.use('/user', userRoutes)
app.use('/shop', shopRoutes)

// * database connection
// =======================================================================
const db = new sqlite3.Database(
	'./database/database.db',
	sqlite3.OPEN_READWRITE,
	err => {
		if (err) console.log(err)
		else {
			console.log('DB succesfully connected')
		}
	}
)

app.listen(3000, () => console.log('app is listening on port 3000'))
