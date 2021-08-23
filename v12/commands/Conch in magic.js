module.exports = {	
	name: 'Conch in magic', // 파일이름을 적어주세요.
	execute(message) {        
	const  Discord = require("discord.js"); //안쓸떄는 지워도 되요 근데 오류나면 지우세요.
    if (message.content.startsWith('!선권', '!선권아', '!이선권')) { 
        var ask = ["어", "그만","그만해","제발 그만해","죄송합니당","인생ㅅㅂ","홀리","홀리몰리","호올리모올리","포기해","아니야", "시바 이건 아니지","응 아니야", "엉", "아잉", "이잉", "엉", "조졌다", "응 조졋서", "주인님", "시밤", "한국어 어렵네", "헤으응"];
        var askuNum = Math.floor(Math.random()*23);
        var result = ask[askuNum];
        console.log("정상적으로 답변을 보냄(선권이)")
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#DEB887')
        .setDescription(result)
        .setThumbnail('https://playwares.com/files/attach/images/763163/304/480/046/69402fc54ae65745f471afa35c9880af.png')
        .setTimestamp()
        message.channel.send(exampleEmbed);     
       }
  
	},
};
