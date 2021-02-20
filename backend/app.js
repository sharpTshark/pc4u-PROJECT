const express = require('express')
const app = express()
const bcrypt = require('bcrypt')

app.use(express.json())

app.listen(3000, () => console.log('app is listening on port 3000'))

// * database sim
// =======================================================================
const users = {
	email: 'test',
	pass: 'somestringtoencrypt',
}

// * bcrypt secret
// =======================================================================
const secret = 'ssknofeifeui389aiubbkn3iof09dcnodkl23ijoeoijds0j9'

// * a login endpoint
// =======================================================================
app.post('/login', (req, res) => {
	const email = req.body.email
	const pass = req.body.pass

	if (bcrypt.compareSync(pass, users.pass)) {
		console.log('yup thats the right one')
	}

	res.send('login')
})

app.post('/register', (req, res) => {
	const email = req.body.email
	const pass = req.body.pass
	const isAdmin = req.body.isAdmin

	const hashed = bcrypt.hashSync(pass, 10)

	res.send('register')
})

// * get products with filters
// ! filters still need to be added to endoint
// =======================================================================
app.get('/products', (req, res) => {
	res.send('products')
})

console.log('works')
