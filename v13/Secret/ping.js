const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('test11')
		.setDescription('testing!'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},

};