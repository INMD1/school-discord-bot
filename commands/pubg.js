module.exports = {	
	name: 'pubg',
	execute(message) {        
	const  Discord = require("discord.js"); //안쓸떄는 지워도 되요 근데 오류나면 지우세요.
    var cheerio = require('cheerio');
    var request = require('request');

    var url = 'https://pubg.op.gg/';
    var data = new Array(),
    up_date,
    up_time;

  request(url, function(error, response, html){
  if (!error) {
  var $ = cheerio.load(html);

 
  $('body > div.pubg.pubg--main > header > div.opgg-header.opgg-header--gamg-pubg > div.current-user > span').each(function(){
    var data_info = $(this);
    var data_info_text = data_info.text();
    data = data_info_text;
    })
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#DEB887')
    .setTitle('현재 배그 동접사수')
    .setDescription(data+"명")
    .setThumbnail('https://playwares.com/files/attach/images/763163/304/480/046/69402fc54ae65745f471afa35c9880af.png')
    .setTimestamp()
    .setFooter('Ubuntu 20.04 LTS', 'https://avatars1.githubusercontent.com/u/41885157?s=40&u=285801175efe4af1c2e21b821160fdcaf996b898&v=4');
    message.channel.send(exampleEmbed); 
    console.log("(배그동접사수)가 성공적으로 로드가 됨");    
  }
  });   
	},
};