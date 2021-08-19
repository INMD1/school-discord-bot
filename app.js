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

/*전체 특정명령어 선언문
const prefix = process.env.PREFIX;
*/
/* 특정명령어 부분 추후안내 예정
client.on("message", message => {
  let prefix = ".";
  if(message.author.bot || !message.guild) return;
  if(!message.content.startsWith(prefix)) return;
*/
/*서버가 정상적으로 작동할떄 뜨는 text */

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
         const exampleEmbed = new Discord.MessageEmbed()
         .setColor(' #fef01b ')
         .setTitle('명령어 목록')	     	     
         .setDescription('봇의 명령어를 알려 드립니다.')
         .addField('차트',  `멜론차트 10위까지 보여 드립니다 *따로따로 하나씩 나옴.`, true)
         .addField('운세',  `말띠의 운세를 알려 드립니다.`, true)
         //.addField('!선권, !선권아, !이선권',  `선권이가 답변을 해드려요!.`, true)
         .addField('날씨 "지역입력"', `입력한 지역의 날씨를 알려드립니다. ex(날씨 서울)`)
         .addField('배그동접자"', `현재 배그 동접자수를 보여줌니다.`)
         .setTimestamp()
        
         message.channel.send(exampleEmbed);
         /* 개인메세지 보낼떄
         message.channel.send("따로 개인메세지로 보냈습니다.");
         client.users.get(`${message.author.id}`).send(exampleEmbed)
         */
    }
  });

  client.on("message", message => {
    if (message.content == "ping") {
    var ping = new Date().getTime() - message.createdTimestamp + " ms 입니다"
    message.channel.send(`봇의 핑은 ${client.ping}ping | 실시간서비스 속도은`+ ping);
    
    }
  });

  client.on('message', message => {
    if (message.content === '프샤') {
      let embed = new Discord.MessageEmbed()
    .setImage(message.author.avatarURL)
    .setColor('#275BF0')
      message.channel.send(embed)
    }
});


  client.on("message", message => {
    var prefix = "" //자신이 원하는 접두사를 정해주세요!
    if (message.content.indexOf(prefix) !== 0) return;
   
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    //모듈을 추가하고 싶으면 commands에 자신이 원하는 모듈파일을 넣고
    //
    //  case '명령어 이름 이건 파일이름을 따르지 않아도 됨니다!' {
    //	client.commands.get('파일 이름(파일형식은 저거)').execute(message, args);
    //  breack;
    //
    //이걸 넣어서 추가해 주세요!
    switch (command){
        //case "차트" :
           // client.commands.get('chart').execute(message, args);
            //break;
        case "프샤" :
            client.commands.get('image').execute(message, args);
            break;
        case "날씨" :
            client.commands.get('weather').execute(message, args);
            break;
        case "배그동접자" :
            client.commands.get('pubg').execute(message, args);
            break;
        case "운세" :
            client.commands.get('luck').execute(message, args);
            break;
        case "별자리" :
            client.commands.get('star').execute(message, args);
            break;
        case "서버정보" :
            client.commands.get('ver').execute(message, args);
            break;
        case "로또" :
            client.commands.get('lotto').execute(message, args);
            break;
        case "무야호" :
              client.commands.get('image1').execute(message, args);
            break;
        case "식단정보" :
             client.commands.get('food').execute(message, args);
            break;
        case "내식" :
              client.commands.get('food_t').execute(message, args);
            break;
    };

    //switch문에서 안되면 여기에 넣어서 한번 시도해보세요
    //
    //  else if(command === '명령어 이름 이건 파일이름을 따르지 않아도 됨니다!') {
    //	client.commands.get('파일 이름(파일형식은 저거)').execute(message, args);
    //  }
    //
    //이걸 넣어서 추가해 주세요!
    //if(command === '!선권', '!선권아', '!이선권') {
    //  client.commands.get('Conch in magic').execute(message, args);
    // }
   });  	



client.login(token);
