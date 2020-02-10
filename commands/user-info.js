const Discord = require('discord.js');

module.exports = {
	name: 'user-info',
	description: 'Displays user information',
	execute(message, args) {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}\nYour Nickname: ${message.member.nickname}`);
		const exampleEmbed = new Discord.MessageEmbed()
			.setColor('#0099ff')
			.setTitle('Some title')
			.setURL('https://discord.js.org/')
			.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
			.setDescription('Some description here')
			.setThumbnail('https://i.imgur.com/wSTFkRM.png')
			.addField('Regular field title', 'Some value here')
			.addBlankField()
			.addField('Inline field title', 'Some value here', true)
			.addField('Inline field title', 'Some value here', true)
			.addField('Inline field title', 'Some value here', true)
			.setImage('https://i.imgur.com/wSTFkRM.png')
			.setTimestamp()
			.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

		channel.send(exampleEmbed);

	},
};