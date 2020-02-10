module.exports = {
	name: 'say',
	description: 'Have the bot speak, secretly',
	execute(message, args) {
		const sayMessage = args.join(" ");
        message.delete().catch(O_o=>{}); 
        message.channel.send(sayMessage);
    }
};