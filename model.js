const moment = require('moment');

module.exports.GuestBook = class GuestBook {
	constructor() {
		this.book = [];
	}

	addEntry(entry) {
		this.book.push(entry);
	}

	entries() {
		return this.book;
	}
}

class Entry {
	constructor(author, comment, time) {
		this.author = author;
		this.comment = comment;
		this.time = time;
	}
}

module.exports.Entry = Entry;

module.exports.EntryFactory = class {
	new(author, comment) {
		return new Entry(author, comment, moment().format())
	}
}
