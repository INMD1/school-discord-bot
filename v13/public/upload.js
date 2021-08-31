const {
	SlashCommandBuilder
} = require('@discordjs/builders');
const {
	see
} = require('../jsonfile/config.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('등록')
		.setDescription('DOD잔류신청 기숙사 발열측정을 위해서 개인정보를 등록합니다.!')
		.addStringOption(option => option.setName('학번').setDescription('scid'))
		.addStringOption(option => option.setName('이름').setDescription('name'))
		.addStringOption(option => option.setName('기숙사').setDescription('room')),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},

};