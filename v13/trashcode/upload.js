
const {SlashCommandBuilder} = require('@discordjs/builders');
const {autocheck} = require('../jsonfile/config.json');
let time = new Date();
module.exports = {
	data: new SlashCommandBuilder()
		.setName('등록')
		.setDescription('DOD잔류신청 기숙사 발열측정을 위해서 개인정보를 등록합니다.!')
		.addStringOption(option => option.setName('학번').setDescription('학번을 입력해주세요').setRequired(true))
		.addStringOption(option => option.setName('이름').setDescription('이름을 입력해주세요').setRequired(true)),
	async execute(interaction) {
		if(autocheck == false){
			interaction.reply({description: '현재 기능이 설정되지 않았습니다. 관리자한데 문의해주세요.'});
		}else if(autocheck == true){
			const shid = interaction.options.getString('학번');
			const name = interaction.options.getString('이름');
			console.log('------------------------------');
			console.log('시간: ', time);
			console.log('디스코드 ID: ' + interaction.user.id);
			console.log('학번: ', shid);
			console.log('------------------------------');
			
			interaction.reply("등록이 완료되었습니다 만약에 이상한게 있을 경우 관리자에게 이야기를 꼭 해주세요.");
		}else{
			console.error("true또는 false인지 config.json에서 확인해주시기 바람니다. " + time)
		}
	},

};
