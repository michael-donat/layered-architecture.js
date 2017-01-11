module.exports.AddEntryHandler = class {
	constructor(repository, factory) {
		this.repository = repository;
		this.factory = factory;
	}

	execute(command) {
		return this.repository.save(
			this.factory.new(command.author, command.comment)
		);
	}
}

module.exports.ListEntriesHandler = class {
	constructor(repository) {
		this.repository = repository;
	}

	execute(command) {
		return Promise.resolve(this.repository.all().then(book => book.entries()));
	}
}
