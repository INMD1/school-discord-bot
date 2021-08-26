module.exports = {	
	name: 'Conch in magic', // 파일이름을 적어주세요.
	execute(message) {        
	const  Discord = require("discord.js"); //안쓸떄는 지워도 되요 근데 오류나면 지우세요.
    if (message.content.startsWith('소라고동','소라고동님','마법에 소라고동')) { 
        var ask = ["안돼", "물론", "넌 왜그러니 나한데", "안되요", "그건좀..", "stop!", "다시 해봐", "나도 몰라", "하면 그사람", "그래", "되", "돌아가", "일이나 하세요^^"];
        var askuNum = Math.floor(Math.random()*13);
        var result = ask[askuNum];
        console.log("정상적으로 답변을 보냄(소라고동 명렁어 부분)")
        const send = new Discord.MessageEmbed()
        .setColor('#DEB887')
        .setTitle('마법에 소라고동')
        .setDescription(result)
        .setThumbnail('https://playwares.com/files/attach/images/763163/304/480/046/69402fc54ae65745f471afa35c9880af.png')
        .setTimestamp()
        message.channel.send(send);     
       }
  
	},
};