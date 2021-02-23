const route = require('express').Router()

// * get products with filters
// ! filters still need to be added to endoint
// =======================================================================
route.get('/products', (req, res) => {
	res.send('products')
})

module.exports = route
