module.exports = {	
	name: 'ver', // 파일이름을 적어주세요.
	execute(message) {        
	const  Discord = require("discord.js"); //안쓸떄는 지워도 되요 근데 오류나면 지우세요.
    const os = require('os');
    var cpus = os.cpus();
    for(var i = 0; i < cpus.length; i++) {
        var model = ("model: " + cpus[i].model);
    }
    const ver = new Discord.MessageEmbed()
	.setColor('#0099ff')
    .setTitle('디스코드 봇 서버정보')
    .addFields(
	{ name: '운영체제 아키텍처', value: os.arch() },
        { name: '운영체제', value: os.type() },
	{ name: '서버 cpu ', value: model }
	)    
    message.channel.send(ver);

	},
};
