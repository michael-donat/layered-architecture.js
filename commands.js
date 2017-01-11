module.exports.ListEntries = class {
	constructor() {
		this.ID = 'command.book.list';
	}
}

module.exports.AddEntry = class {
	constructor(author, comment) {
		this.ID = 'command.book.add';
		this.author = author;
		this.comment = comment;
	}
}

module.exports.AddEntry.fromRequest = function(req) {
	return new module.exports.AddEntry(req.body.author, req.body.comment);
}
