module.exports = {	
	name: 'star', // 파일이름을 적어주세요.
	execute(message) {        
	const  Discord = require("discord.js"); //안쓸떄는 지워도 되요 근데 오류나면 지우세요.
    var prefix = "별자리"
    if (message.content.indexOf(prefix) !== 0) return;
   
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
   
  if(command === '물병자리') {
      var cheerio = require('cheerio');
      var request = require('request');

      var url = 'https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&query=%EB%AC%BC%EB%B3%91%EC%9E%90%EB%A6%AC%20%EC%9A%B4%EC%84%B8';
      var data = new Array(),
      up_date,
      up_time;
 
    request(url, function(error, response, html){
    if (!error) {
    var $ = cheerio.load(html);
 
   
    $('#yearFortune > div > div.detail.detail2 > h6 > ul > li.first_lst > a').each(function(){
      var data_info = $(this);
        var data_info_text = data_info.text();
        title1 = data_info_text;
      })
      $('#yearFortune > div > div.detail.detail2 > p:nth-child(3)').each(function(){
      var data_info = $(this);
          var data_info_text = data_info.text();
          text1 = data_info_text;
        });
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#01DF01')
        .setTitle(title1)
        .setURL(url)
        .setDescription(text1)
        .setThumbnail('https://search.pstatic.net/common?type=o&size=75x75&quality=90&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Foutside%2Fsign%2Fimg%2F20140305%2Fimg_sign01.png')
        .addField('출처', `네이버 말띠 운세`, true)
        .setTimestamp()
        .setFooter('Ubuntu 20.04 LTS', 'https://avatars1.githubusercontent.com/u/41885157?s=40&u=285801175efe4af1c2e21b821160fdcaf996b898&v=4');
        message.channel.send(exampleEmbed); 
        console.log("별자리(이)가 성공적으로 로드가 됨 구역1");    
    }
    });           
  }else if(command === '물고기자리') {
    var cheerio = require('cheerio');
    var request = require('request');

    var url = 'https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&query=%EB%AC%BC%EA%B3%A0%EA%B8%B0%EC%9E%90%EB%A6%AC%20%EC%9A%B4%EC%84%B8';
  var data = new Array(),
    up_date,
    up_time;

  request(url, function(error, response, html){
  if (!error) {
  var $ = cheerio.load(html);

 
  $('#yearFortune > div > div.detail.detail2 > h6 > ul > li.first_lst > a').each(function(){
    var data_info = $(this);
      var data_info_text = data_info.text();
      title1 = data_info_text;
    })
    $('#yearFortune > div > div.detail.detail2 > p:nth-child(3)').each(function(){
    var data_info = $(this);
        var data_info_text = data_info.text();
        text1 = data_info_text;
      });
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#01DF01')
      .setTitle(title1)
      .setURL(url)
      .setDescription(text1)
      .setThumbnail('https://search.pstatic.net/common?type=o&size=75x75&quality=90&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Foutside%2Fsign%2Fimg%2F20140305%2Fimg_sign02.png')
      .addField('출처', `네이버 말띠 운세`, true)
      .setTimestamp()
      .setFooter('Ubuntu 20.04 LTS', 'https://avatars1.githubusercontent.com/u/41885157?s=40&u=285801175efe4af1c2e21b821160fdcaf996b898&v=4');
      message.channel.send(exampleEmbed); 
      console.log("별자리(이)가 성공적으로 로드가 됨 구역2");    
  }
  });           
  }else if(command === '양자리'){
  var cheerio = require('cheerio');
  var request = require('request');

  var url = 'https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&query=%EC%96%91%EC%9E%90%EB%A6%AC%20%EC%9A%B4%EC%84%B8';
var data = new Array(),
  up_date,
  up_time;

request(url, function(error, response, html){
if (!error) {
var $ = cheerio.load(html);


$('#yearFortune > div > div.detail.detail2 > h6 > ul > li.first_lst > a').each(function(){
  var data_info = $(this);
    var data_info_text = data_info.text();
    title1 = data_info_text;
  })
  $('#yearFortune > div > div.detail.detail2 > p:nth-child(3)').each(function(){
  var data_info = $(this);
      var data_info_text = data_info.text();
      text1 = data_info_text;
    });
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#01DF01')
    .setTitle(title1)
    .setURL(url)
    .setDescription(text1)
    .setThumbnail('https://search.pstatic.net/common?type=o&size=75x75&quality=90&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Foutside%2Fsign%2Fimg%2F20140305%2Fimg_sign03.png')
    .addField('출처', `네이버 말띠 운세`, true)
    .setTimestamp()
    .setFooter('Ubuntu 20.04 LTS', 'https://avatars1.githubusercontent.com/u/41885157?s=40&u=285801175efe4af1c2e21b821160fdcaf996b898&v=4');
    message.channel.send(exampleEmbed); 
    console.log("별자리(이)가 성공적으로 로드가 됨 구역3");    
}
});           
  }else if(command === '황소자리'){
var cheerio = require('cheerio');
var request = require('request');

var url = 'https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&query=%ED%99%A9%EC%86%8C%EC%9E%90%EB%A6%AC%20%EC%9A%B4%EC%84%B8';
var data = new Array(),
up_date,
up_time;

request(url, function(error, response, html){
if (!error) {
var $ = cheerio.load(html);


$('#yearFortune > div > div.detail.detail2 > h6 > ul > li.first_lst > a').each(function(){
var data_info = $(this);
  var data_info_text = data_info.text();
  title1 = data_info_text;
})
$('#yearFortune > div > div.detail.detail2 > p:nth-child(3)').each(function(){
var data_info = $(this);
    var data_info_text = data_info.text();
    text1 = data_info_text;
  });
  const exampleEmbed = new Discord.MessageEmbed()
  .setColor('#01DF01')
  .setTitle(title1)
  .setURL(url)
  .setDescription(text1)
  .setThumbnail('https://search.pstatic.net/common?type=o&size=75x75&quality=90&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Foutside%2Fsign%2Fimg%2F20140305%2Fimg_sign04.png')
  .addField('출처', `네이버 말띠 운세`, true)
  .setTimestamp()
  .setFooter('Ubuntu 20.04 LTS', 'https://avatars1.githubusercontent.com/u/41885157?s=40&u=285801175efe4af1c2e21b821160fdcaf996b898&v=4');
  message.channel.send(exampleEmbed); 
  console.log("별자리(이)가 성공적으로 로드가 됨 구역4");    
}
});           
  }else if(command === '쌍둥이자리'){
var cheerio = require('cheerio');
var request = require('request');

var url = 'https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&query=%EC%8C%8D%EB%91%A5%EC%9D%B4%EC%9E%90%EB%A6%AC%20%EC%9A%B4%EC%84%B8';
var data = new Array(),
up_date,
up_time;

request(url, function(error, response, html){
if (!error) {
var $ = cheerio.load(html);


$('#yearFortune > div > div.detail.detail2 > h6 > ul > li.first_lst > a').each(function(){
var data_info = $(this);
var data_info_text = data_info.text();
title1 = data_info_text;
})
$('#yearFortune > div > div.detail.detail2 > p:nth-child(3)').each(function(){
var data_info = $(this);
  var data_info_text = data_info.text();
  text1 = data_info_text;
});
const exampleEmbed = new Discord.MessageEmbed()
.setColor('#01DF01')
.setTitle(title1)
.setURL(url)
.setDescription(text1)
.setThumbnail('https://search.pstatic.net/common?type=o&size=75x75&quality=90&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Foutside%2Fsign%2Fimg%2F20140305%2Fimg_sign05.png')
.addField('출처', `네이버 말띠 운세`, true)
.setTimestamp()
.setFooter('Ubuntu 20.04 LTS', 'https://avatars1.githubusercontent.com/u/41885157?s=40&u=285801175efe4af1c2e21b821160fdcaf996b898&v=4');
message.channel.send(exampleEmbed); 
console.log("별자리(이)가 성공적으로 로드가 됨 구역5");    
}
});           
  }else if(command === '게자리'){
var cheerio = require('cheerio');
var request = require('request');

var url = 'https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&query=%EA%B2%8C%EC%9E%90%EB%A6%AC%20%EC%9A%B4%EC%84%B8';
var data = new Array(),
up_date,
up_time;

request(url, function(error, response, html){
if (!error) {
var $ = cheerio.load(html);


$('#yearFortune > div > div.detail.detail2 > h6 > ul > li.first_lst > a').each(function(){
var data_info = $(this);
var data_info_text = data_info.text();
title1 = data_info_text;
})
$('#yearFortune > div > div.detail.detail2 > p:nth-child(3)').each(function(){
var data_info = $(this);
  var data_info_text = data_info.text();
  text1 = data_info_text;
});
const exampleEmbed = new Discord.MessageEmbed()
.setColor('#01DF01')
.setTitle(title1)
.setURL(url)
.setDescription(text1)
.setThumbnail('https://search.pstatic.net/common?type=o&size=75x75&quality=90&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Foutside%2Fsign%2Fimg%2F20140305%2Fimg_sign06.png')
.addField('출처', `네이버 말띠 운세`, true)
.setTimestamp()
.setFooter('Ubuntu 20.04 LTS', 'https://avatars1.githubusercontent.com/u/41885157?s=40&u=285801175efe4af1c2e21b821160fdcaf996b898&v=4');
message.channel.send(exampleEmbed); 
console.log("별자리(이)가 성공적으로 로드가 됨 구역6");    
}
});           
  }else if(command === '사자자리'){
var cheerio = require('cheerio');
var request = require('request');

var url =  'https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&query=%EC%82%AC%EC%9E%90%EC%9E%90%EB%A6%AC%20%EC%9A%B4%EC%84%B8';
var data = new Array(),
up_date,
up_time;

request(url, function(error, response, html){
if (!error) {
var $ = cheerio.load(html);


$('#yearFortune > div > div.detail.detail2 > h6 > ul > li.first_lst > a').each(function(){
var data_info = $(this);
var data_info_text = data_info.text();
title1 = data_info_text;
})
$('#yearFortune > div > div.detail.detail2 > p:nth-child(3)').each(function(){
var data_info = $(this);
  var data_info_text = data_info.text();
  text1 = data_info_text;
});
const exampleEmbed = new Discord.MessageEmbed()
.setColor('#01DF01')
.setTitle(title1)
.setURL(url)
.setDescription(text1)
.setThumbnail('https://search.pstatic.net/common?type=o&size=75x75&quality=90&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Foutside%2Fsign%2Fimg%2F20140305%2Fimg_sign07.png')
.addField('출처', `네이버 말띠 운세`, true)
.setTimestamp()
.setFooter('Ubuntu 20.04 LTS', 'https://avatars1.githubusercontent.com/u/41885157?s=40&u=285801175efe4af1c2e21b821160fdcaf996b898&v=4');
message.channel.send(exampleEmbed); 
console.log("별자리(이)가 성공적으로 로드가 됨 구역7");    
}
});           
  }else if(command === '처녀자리'){
var cheerio = require('cheerio');
var request = require('request');

var url = 'https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&query=%EC%B2%98%EB%85%80%EC%9E%90%EB%A6%AC%20%EC%9A%B4%EC%84%B8';
var data = new Array(),
up_date,
up_time;

request(url, function(error, response, html){
if (!error) {
var $ = cheerio.load(html);


$('#yearFortune > div > div.detail.detail2 > h6 > ul > li.first_lst > a').each(function(){
var data_info = $(this);
var data_info_text = data_info.text();
title1 = data_info_text;
})
$('#yearFortune > div > div.detail.detail2 > p:nth-child(3)').each(function(){
var data_info = $(this);
  var data_info_text = data_info.text();
  text1 = data_info_text;
});
const exampleEmbed = new Discord.MessageEmbed()
.setColor('#01DF01')
.setTitle(title1)
.setURL(url)
.setDescription(text1)
.setThumbnail('https://search.pstatic.net/common?type=o&size=75x75&quality=90&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Foutside%2Fsign%2Fimg%2F20140305%2Fimg_sign08.png')
.addField('출처', `네이버 말띠 운세`, true)
.setTimestamp()
.setFooter('Ubuntu 20.04 LTS', 'https://avatars1.githubusercontent.com/u/41885157?s=40&u=285801175efe4af1c2e21b821160fdcaf996b898&v=4');
message.channel.send(exampleEmbed); 
console.log("별자리(이)가 성공적으로 로드가 됨 구역8");    
}
});           
  }else if(command === '천창자리'){
var cheerio = require('cheerio');
var request = require('request');

var url = 'https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&query=%EC%B2%9C%EC%B9%AD%EC%9E%90%EB%A6%AC%20%EC%9A%B4%EC%84%B8';
var data = new Array(),
up_date,
up_time;

request(url, function(error, response, html){
if (!error) {
var $ = cheerio.load(html);


$('#yearFortune > div > div.detail.detail2 > h6 > ul > li.first_lst > a').each(function(){
var data_info = $(this);
var data_info_text = data_info.text();
title1 = data_info_text;
})
$('#yearFortune > div > div.detail.detail2 > p:nth-child(3)').each(function(){
var data_info = $(this);
  var data_info_text = data_info.text();
  text1 = data_info_text;
});
const exampleEmbed = new Discord.MessageEmbed()
.setColor('#01DF01')
.setTitle(title1)
.setURL(url)
.setDescription(text1)
.setThumbnail('https://search.pstatic.net/common?type=o&size=75x75&quality=90&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Foutside%2Fsign%2Fimg%2F20140305%2Fimg_sign09.png')
.addField('출처', `네이버 말띠 운세`, true)
.setTimestamp()
.setFooter('Ubuntu 20.04 LTS', 'https://avatars1.githubusercontent.com/u/41885157?s=40&u=285801175efe4af1c2e21b821160fdcaf996b898&v=4');
message.channel.send(exampleEmbed); 
console.log("별자리(이)가 성공적으로 로드가 됨 구역9");    
}
});           
  }else if(command === '전갈자리'){
var cheerio = require('cheerio');
var request = require('request');

var url = 'https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&query=%EC%A0%84%EA%B0%88%EC%9E%90%EB%A6%AC%20%EC%9A%B4%EC%84%B8';
var data = new Array(),
up_date,
up_time;

request(url, function(error, response, html){
if (!error) {
var $ = cheerio.load(html);


$('#yearFortune > div > div.detail.detail2 > h6 > ul > li.first_lst > a').each(function(){
var data_info = $(this);
var data_info_text = data_info.text();
title1 = data_info_text;
})
$('#yearFortune > div > div.detail.detail2 > p:nth-child(3)').each(function(){
var data_info = $(this);
  var data_info_text = data_info.text();
  text1 = data_info_text;
});
const exampleEmbed = new Discord.MessageEmbed()
.setColor('#01DF01')
.setTitle(title1)
.setURL(url)
.setDescription(text1)
.setThumbnail('https://search.pstatic.net/common?type=o&size=75x75&quality=90&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Foutside%2Fsign%2Fimg%2F20140305%2Fimg_sign10.png')
.addField('출처', `네이버 말띠 운세`, true)
.setTimestamp()
.setFooter('Ubuntu 20.04 LTS', 'https://avatars1.githubusercontent.com/u/41885157?s=40&u=285801175efe4af1c2e21b821160fdcaf996b898&v=4');
message.channel.send(exampleEmbed); 
console.log("별자리(이)가 성공적으로 로드가 됨 구역10");    
}
});           
  }else if(command === '사수자리'){
var cheerio = require('cheerio');
var request = require('request');

var url = 'https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&query=%EC%82%AC%EC%88%98%EC%9E%90%EB%A6%AC%20%EC%9A%B4%EC%84%B8';
var data = new Array(),
up_date,
up_time;

request(url, function(error, response, html){
if (!error) {
var $ = cheerio.load(html);


$('#yearFortune > div > div.detail.detail2 > h6 > ul > li.first_lst > a').each(function(){
var data_info = $(this);
var data_info_text = data_info.text();
title1 = data_info_text;
})
$('#yearFortune > div > div.detail.detail2 > p:nth-child(3)').each(function(){
var data_info = $(this);
  var data_info_text = data_info.text();
  text1 = data_info_text;
});
const exampleEmbed = new Discord.MessageEmbed()
.setColor('#01DF01')
.setTitle(title1)
.setURL(url)
.setDescription(text1)
.setThumbnail('https://search.pstatic.net/common?type=o&size=75x75&quality=90&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Foutside%2Fsign%2Fimg%2F20140305%2Fimg_sign11.png')
.addField('출처', `네이버 말띠 운세`, true)
.setTimestamp()
.setFooter('Ubuntu 20.04 LTS', 'https://avatars1.githubusercontent.com/u/41885157?s=40&u=285801175efe4af1c2e21b821160fdcaf996b898&v=4');
message.channel.send(exampleEmbed); 
console.log("별자리(이)가 성공적으로 로드가 됨 구역11");    
}
});           
  }else if(command === '염소자리'){
var cheerio = require('cheerio');
var request = require('request');

var url = 'https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&query=%EC%97%BC%EC%86%8C%EC%9E%90%EB%A6%AC%20%EC%9A%B4%EC%84%B8';
var data = new Array(),
up_date,
up_time;

request(url, function(error, response, html){
if (!error) {
var $ = cheerio.load(html);


$('#yearFortune > div > div.detail.detail2 > h6 > ul > li.first_lst > a').each(function(){
var data_info = $(this);
var data_info_text = data_info.text();
title1 = data_info_text;
})
$('#yearFortune > div > div.detail.detail2 > p:nth-child(3)').each(function(){
var data_info = $(this);
  var data_info_text = data_info.text();
  text1 = data_info_text;
});
const exampleEmbed = new Discord.MessageEmbed()
.setColor('#01DF01')
.setTitle(title1)
.setURL(url)
.setDescription(text1)
.setThumbnail('https://search.pstatic.net/common?type=o&size=75x75&quality=90&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Foutside%2Fsign%2Fimg%2F20140305%2Fimg_sign12.png')
.addField('출처', `네이버 말띠 운세`, true)
.setTimestamp()
.setFooter('Ubuntu 20.04 LTS', 'https://avatars1.githubusercontent.com/u/41885157?s=40&u=285801175efe4af1c2e21b821160fdcaf996b898&v=4');
message.channel.send(exampleEmbed); 
console.log("별자리(이)가 성공적으로 로드가 됨 구역12");    
}
});           
}                

	},
};