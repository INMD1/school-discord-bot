module.exports = {	
	name: 'schoolfood', // 파일이름을 적어주세요.
	execute(message) {        
	const  Discord = require("discord.js"); const request = require("request")

  // 시간로드

  const today = new Date();
  const year = today.getFullYear();
  const month = ('0' + (today.getMonth() + 1)).slice(-2);
  const day = ('0' + today.getDate()).slice(-2);
  
  // 주소
  const Sudeokjeon = "https://smart.deu.ac.kr/m/sel_dfood?date="+year+month+day+"&gubun1=1&gubun2=1"
  const information = "https://smart.deu.ac.kr/m/sel_dfood?date="+year+month+day+"&gubun1=1&gubun2=2"
  console.log(year + month + day)
  
  // 파싱&메세지 보내기
  request(Sudeokjeon,  function(err,res ,body) {
      if(body == '{}'){
        message.channel.send(error);
        console.log('수덕전:err')
      }else{
        const data = JSON.parse(body);
        const send0 = new Discord.MessageEmbed()
        .setColor(' #488AC7 ')
        .setTitle('정보공학관 오늘식단')
        .addField('수덕전 코너1', '정식')
        .addField('수덕전 3코너', data['수덕전 코너3'][0].menuName)
        .addField('수덕전 예비용', '라면&라면밥')
        message.channel.send(send0);
      }
  });

  request(information, function(err,res ,body) {
    if(body == '{}'){
      message.channel.send(error1);
      console.log('정보공학관:err')
    }else{
      const data = JSON.parse(body);
      const send1 = new Discord.MessageEmbed()
      .setColor(' #488AC7 ')
      .setTitle('정보공학관 오늘식단')
      .setDescription(year+"년 "+month+"월 "+day+"일")
      .addField('정보공학관 1코너', '정식')
      .addField('정보공학관 2코너', data['정보공학관 코너2'][0].menuName)
      .addField('정보공학관 4코너', '라면&라면밥')
      message.channel.send(send1);
    }
  });
  // 에려 메세지 양식
  const error = new Discord.MessageEmbed()
  .setColor('#F62217')
  .setTitle('수덕전 ERROR')
  .setDescription('오늘은 식단이 없거나 운영을 안합니다.')	 

  const error1 = new Discord.MessageEmbed()
  .setColor('#F62217')
  .setTitle('정보공학관 ERROR')
  .setDescription('오늘은 식단이 없거나 운영을 안합니다.')
	},
};
