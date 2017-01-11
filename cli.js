const system = require('./system');
const program = require('commander');
const commands = require('./commands');

const bus = system.get('bus');

program
	.version('1.0.0')
	.command('list')
	.alias('ls')
	.action(()=>{
		bus.handle(new commands.ListEntries()).then(entries => {
				console.log(entries);
		});
	})

program
	.command('add <author> <comment...>')
	.alias('a')
	.action((author, comment) => {
		bus.handle(new commands.AddEntry(author, comment.join(' '))).then(()=>{
			console.log('Added');
		})
	})

program.parse(process.argv);
