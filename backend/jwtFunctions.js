// modules
const jwt = require('jsonwebtoken')

// secret
const jwtSecret = 'dsawhkl909nwkwjknjfjhisa87hjbfetgbyhifs5yw82uujst'

const verifyJwt = token => {
	jwt.verify(token, jwtSecret, function (err, decoded) {
		if (err) {
			console.log(err)
			return { valid: false, reason: 'expired' }
		} else {
			console.log(decoded)
			return { valid: true, reason: '' }
		}
	})
}

const signJwt = data => {
	return jwt.sign(
		{
			exp: Math.floor(Date.now() / 1000) + 60 * 60,
			data: data,
		},
		jwtSecret
	)
}

module.exports = { verifyJwt, signJwt }
