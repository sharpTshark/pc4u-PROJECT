// modules
const jwt = require('jsonwebtoken')

// secret
const jwtSecret = 'dsawhkl909nwkwjknjfjhisa87hjbfetgbyhifs5yw82uujst'

const verifyJwt = async token => {
	const result = await new Promise((resolve, reject) => {
		jwt.verify(token, jwtSecret, function (err, decoded) {
			if (err) {
				resolve({ valid: false, decoded: null, reason: 'expired' })
			} else {
				resolve({ valid: true, decoded: decoded, reason: '' })
			}
		})
	})

	return result
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
