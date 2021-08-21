const fs = require('fs');
const Discord = require('discord.js');
const { token } = require('./config.json');
const os = require('os');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on('ready', () => {

  console.log('-----------------');
  console.log('  운영체제 정보');
  console.log('-----------------');
  console.log('운영체제',os.arch());
  console.log('운영체제 os', os.type());
  console.log('운영체제 버전', os.release());

  console.log('-----------------');
  console.log("     봇 로그");
  console.log('-----------------');


  var moment = require('moment'); 
  require('moment-timezone'); 
  moment.tz.setDefault("Asia/Seoul"); 
  var date = moment().format('YYYY-MM-DD HH:mm:ss');
  var version = "version 0.2.3"


    client.user.setActivity("type: help")
    setTimeout(function(){
      console.log(date + "봇을 활성화 했습니다.");
     }, 1000);
    setTimeout(function(){
    console.log(date + "discordbot.js " + version);
   }, 4000);
  });

  client.on("message", message => {
    if (message.content == "help") {
         const helpMassage = new Discord.MessageEmbed()
         .setColor(' #fef01b ')
         .setTitle('명령어 목록')	     	     
         .setDescription('봇의 명령어를 알려 드립니다.')
         .addField('차트',  `멜론차트 10위까지 보여 드립니다 *따로따로 하나씩 나옴.`)
         .addField('운세',  `말띠의 운세를 알려 드립니다.`)
         .addField('날씨 "지역입력"', `입력한 지역의 날씨를 알려드립니다. ex(날씨 서울)`)
         .addField('식단정보, 내식', `기숙사 식단을 알려주고 내식은 내일 기숙사 식단을 알려줌니다.`)
         .addField('학식(Beta)"', `창의관 또는 수덕전 오늘의 학식을 알려줌니다`)
         .setTimestamp()
        
         message.channel.send(helpMassage);
    }
  });

  client.on("message", message => {
    if (message.content == "ping") {
    var ping = new Date().getTime() - message.createdTimestamp + " ms 입니다"
    message.channel.send(`봇의 핑은 ${client.ping}ping | 실시간서비스 속도은`+ ping);
    
    }
  });


  client.on("message", message => {
    var prefix = "" 
    if (message.content.indexOf(prefix) !== 0) return;
   
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    switch (command){
        case "날씨" :
            client.commands.get('weather').execute(message, args);
            break;
        case "운세" :
            client.commands.get('luck').execute(message, args);
            break;
        case "별자리" :
            client.commands.get('star').execute(message, args);
            break;
        case "식단정보" :
             client.commands.get('food').execute(message, args);
            break;
        case "내식" :
              client.commands.get('food_t').execute(message, args);
            break;
        case "차트" :
              client.commands.get('chart').execute(message, args);
            break; 
        case "학식" :
              client.commands.get('schoolfood').execute(message, args);
            break;     
    };
   });  	



client.login(token);
