module.exports = {	
	name: 'luck', // 파일이름을 적어주세요.
	execute(message) {        
	const  Discord = require("discord.js"); //안쓸떄는 지워도 되요 근데 오류나면 지우세요.
    var cheerio = require('cheerio');
    var request = require('request');
     
    var url = 'https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=%EB%A7%90%EB%9D%A0+%EC%9A%B4%EC%84%B8%5B';
    var data = new Array(),
        up_date,
        up_time;
     
    request(url, function(error, response, html){
      if (!error) {
        var $ = cheerio.load(html);
     
       
        $(' #yearFortune > div > div.detail > p:nth-child(3)').each(function(){
          var data_info = $(this);
            var data_info_text = data_info.text();
            data = data_info_text;
          })
          
            console.log("운세가 성공적으로 로드가 됨");
            const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#01DF01')
            .setTitle('말띠 운세')
            .setURL('https://search.naver.com/search.naver?sm=top_sug.pre&fbm=1&acr=1&acq=akfEL+dnstp&qdt=0&ie=utf8&query=%EB%A7%90%EB%9D%A0%EC%9A%B4%EC%84%B8')
            .setDescription(data)
            .setThumbnail('https://search.pstatic.net/common?type=o&size=94x94&quality=90&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Foutside%2Fsign%2Fimg%2F20140305%2Fimg_b_zodiac07.png')
            .addField('출처', `네이버 말띠 운세`, true)
            .setTimestamp()
            .setFooter('마법의 소라고동', 'https://avatars1.githubusercontent.com/u/41885157?s=40&u=285801175efe4af1c2e21b821160fdcaf996b898&v=4');
            message.channel.send(exampleEmbed);     
      }
    
    });
  },
};