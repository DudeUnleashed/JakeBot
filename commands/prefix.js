var { prefix } = require('../config.json');

module.exports = {
	name: 'prefix',
	description: 'Shows the current prefix',
	execute(message, args) {
		message.channel.send('The current prefix to summon me is: ' + prefix);
	},
};