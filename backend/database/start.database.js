const sqlite3 = require('sqlite3')

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

module.exports = db
