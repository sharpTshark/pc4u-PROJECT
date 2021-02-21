const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const sqlite3 = require('sqlite3').verbose()

app.use(express.json())
app.use(cors())

app.listen(3000, () => console.log('app is listening on port 3000'))

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

// * secrets
// =======================================================================
const bcryptSecret = 'ssknofeifeui389aiubbkn3iof09dcnodkl23ijoeoijds0j9'
const jwtSecret = 'dsawhkl909nwkwjknjfjhisa87hjbfetgbyhifs5yw82uujst'

// * a login endpoint
// =======================================================================
app.post('/login', (req, res) => {
	const email = req.body.email
	const pass = req.body.pass

	if (bcrypt.compareSync(pass, users.pass)) {
		console.log('yup thats the right one')
	}

	console.log(email, pass)

	// ! make database connection and a user table
	// res.send({
	// 	jwt: jwt.sign(
	// 		{
	// 			exp: Math.floor(Date.now() / 1000) + 60 * 60,
	// 			data: 'loggedIn',
	// 		},
	// 		jwtSecret
	// 	),
	// 	err: false
	// })
})

app.post('/register', (req, res) => {
	const email = req.body.email
	const pass = req.body.pass
	const isAdmin = req.body.isAdmin

	const hashed = bcrypt.hashSync(pass, 10)

	// ! this is a user insert query (preparation still needed)
	// const query = `INSERT INTO users (username, password) VALUES (?, ?);`
	// db.all(query, [key.user, hashed], (err, rows) => {
	// 	if (err) console.log(err)
	// 	else {
	// 		console.log('registered')
	// 		res.send({ registered: true })
	// 		activeKeys.splice(index, 1)

	// 		// ! send back a token for one hour
	// 	}
	// })

	res.send('register')
})

// * get products with filters
// ! filters still need to be added to endoint
// =======================================================================
app.get('/products', (req, res) => {
	res.send('products')
})

console.log('works')
