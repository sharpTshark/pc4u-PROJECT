// modules
const route = require('express').Router()
const bcrypt = require('bcrypt')

// jwt functions
const signJwt = require('../jwtFunctions')

// * a login endpoint
// =======================================================================
route.post('/login', (req, res) => {
	const email = req.body.email
	const pass = req.body.pass

	const query = `SELECT * FROM users WHERE email=?;`
	db.all(query, [email], (err, rows) => {
		if (err) console.log(err)
		else if (rows.length == 1) {
			if (bcrypt.compareSync(pass, rows[0].password)) {
				res.send({ jwt: signJwt(email) })
			} else res.send({ err: 'Email or password is incorrect' })
		} else res.send({ err: 'Email or password is incorrect' })
	})
})

// * a register endpoint
// =======================================================================
route.post('/register', (req, res) => {
	const email = req.body.email
	const pass = req.body.pass

	const hashed = bcrypt.hashSync(pass, 10)

	const query = `INSERT INTO users (email, password) VALUES (?, ?);`

	db.all(query, [email, hashed], (err, rows) => {
		if (err) console.log(err)
		else {
			res.send({ succes: true })
		}
	})
})

module.exports = route
