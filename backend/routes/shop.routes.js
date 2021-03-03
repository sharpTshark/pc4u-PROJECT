const route = require('express').Router()

// * get products with filters
// ! filters still need to be added to endoint
// =======================================================================
route.get('/products', (req, res) => {
	res.send([
		{
			id: 1,
			price: 400,
			name: 'Macbook Pro',
			description: '',
			picture: '',
			category: 'laptop',
		},
		{
			id: 2,
			price: 1000,
			name: 'Macbook lite',
			description: '',
			picture: '',
			category: 'laptop',
		},
		{
			id: 3,
			price: 800,
			name: 'Macbook slim',
			description: '',
			picture: '',
			category: 'laptop',
		},
		{
			id: 4,
			price: 2000,
			name: 'Macbook gaming',
			description: '',
			picture: '',
			category: 'laptop',
		},
		{
			id: 5,
			price: 1600,
			name: 'Macbook plus',
			description: '',
			picture: '',
			category: 'laptop',
		},
	])
})

module.exports = route
