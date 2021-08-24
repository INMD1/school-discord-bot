const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('test')
		.setDescription('testing!'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},

};