const system = require('./system');
const express = require('express');

const commands = require('./commands');

const app = express();

const bus = system.get('bus');

app.use(require('body-parser').urlencoded({extended: true}))
app.get('/', (req, res) => {
	bus.handle(new commands.ListEntries()).then(entries => {
			res.json(entries);
	});
});

app.post('/', (req, res) => {
	bus.handle(commands.AddEntry.fromRequest(req)).then(()=>{
		res.status(201).end();
	})
});

app.listen(3000, () => console.log('Ready on http://0.0.0.0:3000'));
