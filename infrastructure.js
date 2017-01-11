const model = require('./model');

class JSStoreRepository {
	constructor(driver) {
		this.driver = driver;
	}

	save(entry) {
		return new Promise((resolve, reject) => {
			this.driver.save(entry, (err, id) => {
				if (err) {
					return reject(err)
				}
				resolve();
			})
		})
	}

	all() {
		return new Promise((resolve, reject) => {
			this.driver.all((err, result) => {
				if (err) {
					return reject(err);
				}

				resolve(Object.values(result).reduce(
					(book, entry) => {book.addEntry(entry); return book}, new model.GuestBook()
				))
			})
		})
	}
}

module.exports.JSStoreRepository = JSStoreRepository;
