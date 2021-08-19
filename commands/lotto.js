module.exports = {	
	name: 'lotto', // 파일이름을 적어주세요.
	execute(message) {        
	const  Discord = require("discord.js"); //안쓸떄는 지워도 되요 근데 오류나면 지우세요.
	const nuk = []
	for(let a = 1 ; a<999 ; a++ ){
	  var num = Math.floor(Math.random()*45) +1 ;
	  if(nuk.indexOf(num) == -1){
		nuk.push(num)
	  }
	  if(nuk.length == 5){
		break
	  }
	}
	 var bonus = num = Math.floor(Math.random()*45) +1
	 nuk.push("+"+bonus)
	 const text = new Discord.MessageEmbed()
     .setColor(' #00FF40 ')
     .setTitle('로또 번호 추첨')
     .setDescription('실제로 믿지 마시오 `+숫자`는 보너스 입니다.')
     .addFields(
		{ name: '예상 번호', value: nuk },
		{ name: '\u200B', value: '\u200B' },
	)
    message.channel.send(text)
	},
};
