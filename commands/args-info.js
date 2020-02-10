module.exports = {
	name: 'args-info',
	cooldown: 5,
	description: 'Shows argument information',
	args: true,
	execute(message, args) {
		if (args[0] === 'foo') {
			return message.channel.send('bar');
		}
		message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
	},
};