// modules
const route = require('express').Router()
const bcrypt = require('bcrypt')

// jwt functions
const { verifyJwt, signJwt } = require('../jwtFunctions')

// database
const db = require('../database/start.database')

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
				res.send({ jwt: signJwt(rows[0].id) })
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

// * a profile endpoint
// =======================================================================
route.get('/check/:token', async (req, res) => {
	const token = req.params.token

	await verifyJwt(token).then(result => {
		if (result.valid) {
			// ! dont need the password in the query / not save
			// user query
			const query = `SELECT id, email, verified, admin FROM users WHERE id=?;`

			db.all(query, [result.decoded.data], (err, rows) => {
				if (err) console.log(err)
				else {
					res.send(result)
				}
			})
		} else res.send(result)
	})
})

module.exports = route

// orders query
// const query = `SELECT * FROM orders WHERE userId=?;`

// db.all(query, [rows[0].id], (err, rows) => {
// 	if (err) console.log(err)
// 	else {
// 		response.push(rows[0])
// 		res.send(response)
// 	}
// })
