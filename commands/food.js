module.exports = {
    name: 'food', // 파일이름을 적어주세요.
    execute(message) {
        const Discord = require("discord.js"); //안쓸떄는 지워도 되요 근데 오류나면 지우세요.

        const fs = require('fs');

        const jsonFile = fs.readFileSync('/home/inmd/lee/paser/happy.json', 'utf8');
        const data = JSON.parse(jsonFile);
 
        const jsonFile1 = fs.readFileSync('/home/inmd/lee/paser/hyomin.json', 'utf8');
        const data1 = JSON.parse(jsonFile1);

        let today = new Date();   
        let day = today.getDay()-1 ;
        console.log("식단정보가 성공적으로 로드함 "+ today);
        if(day<0){
           const h = new Discord
           .MessageEmbed()
           .setColor('#0099ff')
           .addField('경고!"', `일요일은 식단 정보를 제공하지 않습니다.`)
           .setTimestamp()
             
            message
            .channel
            .send(h);
          }else{

            const happy = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle("내일 행복기숙사 식사 정보")
            .addField('아침 일품', data[day].Breakfast_s, true)
            .addField('점심', data[day].lunch, true)
            .addField('점심 일품', data[day].lunch_s, true)
            .addField('저녁', data[day].dinner, true)
            .addField('저녁 일품', data[day].dinner_s, true)
            .setTimestamp()
            message.channel.send(happy);

        /*
        const hyomin = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle("내일 효민기숙사 식사 정보 ")
            .addField('아침', data1[day].hBreakfast, true)
            .addField('점심', data1[day].hlunch, true)
            .addField('저녁', data1[day].hdinner, true)
            .setTimestamp()
            
        message.channel.send(hyomin);
        */
}

    }
};
