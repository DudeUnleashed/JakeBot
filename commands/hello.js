module.exports = {
	name: 'hello',
	cooldown: 5,
	aliases: ['hi, wassup'],
	description: 'Hello!',
	execute(message, args) {
		const name = message.member.nickname;
		if (name === null) {
			message.channel.send('Hello there ' + message.author.username);
		} else {
			message.channel.send(`Hello there `+ name);
		}
	},
};