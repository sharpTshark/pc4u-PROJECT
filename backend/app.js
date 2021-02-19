const express = require('express')
const app = express()

app.use(express.json())

app.listen(3000, () => console.log('app is listening on port 3000'))

app.get('/', (req, res) => {
	res.send('testing')
})

console.log('works')
