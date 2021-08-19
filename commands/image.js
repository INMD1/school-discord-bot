module.exports = {	
	name: 'image' , //이름은 파일 이름을 똑같이 적어주세요.
	execute(message) {        
		const Discord = require('discord.js');
		if (message.content === '프샤') {
			let embed = new Discord.MessageEmbed()
		   .setImage(message.author.avatarURL)
		   .setColor('#275BF0')
			message.channel.send(embed)
		  }
	  
	},
};