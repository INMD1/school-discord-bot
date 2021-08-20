module.exports = {	
	name: 'weather',
	execute(message) {  
    const Discord = require('discord.js');
    const weather = require('weather-js'); 
	let msg = message.content.toUpperCase(); 
    let cont = message.content.split(" "); 
    let args = cont.slice(1); 
  
    if (msg.startsWith('날씨')) { 
    
      weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) { 
          if (err) message.channel.send(err);
  
          if (result.length === 0) {
              message.channel.send('**올바른 위치를 입력하십시오.**') 
              return;
          }

          var current = result[0].current; 
          var location = result[0].location;

          const embed = new Discord.MessageEmbed()
              .setDescription(`**${current.skytext}**`) 
              .setAuthor(`입력한 지역 ${current.observationpoint}`) 
              .setThumbnail(current.imageUrl)
              .setColor(0x00AE86) 
              .addField('시간대',`UTC${location.timezone}`, true) 
              .addField('단위유형',location.degreetype, true)
              .addField('온도',`${current.temperature} Degrees`, true)
              .addField('체감온도', `${current.feelslike} Degrees`, true)
              .addField('바람',current.winddisplay, true)
              .addField('습도', `${current.humidity}%`, true)
              .addField('npm 출처', 'https://www.npmjs.com/package/weather-js', true)
              message.channel.send({embed});
      });
  }	  
	},
};