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
				res.send({
					jwt: signJwt({ userId: rows[0].id, admin: rows[0].admin }),
					email: rows[0].email,
				})
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
route.get('/profile/:token', async (req, res) => {
	const token = req.params.token

	await verifyJwt(token).then(result => {
		if (result.valid) {
			// user query
			const query = `SELECT id, email, verified, admin FROM users WHERE id=?;`
			db.all(query, [result.decoded.data], (err, rows) => {
				if (err) console.log(err)
				else {
					// order query
					const query2 = `SELECT * FROM orders WHERE userId=?;`
					db.all(query2, [rows[0].id], (err, rrows) => {
						res.send({
							jwt: result,
							user: rows[0],
							orders: rrows,
						})
					})
				}
			})
		} else res.send(result)
	})
})

// * a admin endpoint
// =======================================================================
route.get('/admin/:token', async (req, res) => {
	const token = req.params.token

	await verifyJwt(token).then(result => {
		if (result.valid) {
			if (result.decoded.data.admin) {
				// user query
				const userQuery = `SELECT * FROM users;`
				db.all(userQuery, [], (err, users) => {
					if (err) console.log(err)
					else {
						res.send(users)
					}
				})
			} else res.send({ res: result, err: 'unauthorized' })
		} else res.send({ res: result, err: 'invalid' })
	})
})

module.exports = route
