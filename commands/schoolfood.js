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
  const Sudeokjeon = "https://smart.deu.ac.kr/m/sel_dfood?date=%22"+ year + month + day +"2&gubun1=1&gubun2=1"
  const information = "https://smart.deu.ac.kr/m/sel_dfood?date=%22"+ year + month + day +"2&gubun1=1&gubun2=2"
  console.log(year + month + day)
  
  // 파싱&메세지 보내기
  request(Sudeokjeon,  function(err,res ,body) {
      if(body == '{}'){
        console.log('err')
      }else{
        const data = JSON.parse(body);
        console.log(data['수덕전 코너3'][0].menuName)
      }
  });

  request(information, function(err,res ,body) {
    if(body == '{}'){
      console.log('err')
    }else{
      const data = JSON.parse(body);
      Sudeokjeond = data['정보공학관 코너3'][0].menuName;
    }
  });

  // 에려가 날시
  const error = new Discord.MessageEmbed()
  .setColor(' #66FF33 ')
  .setTitle('멜론 top10')	 
	},
};
