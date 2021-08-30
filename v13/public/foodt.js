const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js"); //안쓸떄는 지워도 되요 근데 오류나면 지우세요.
const path = require('path');
const fs = require('fs');

const jsonFile = fs.readFileSync(path.join(__dirname, '../paserfile/happy.json'));
const data = JSON.parse(jsonFile);

const jsonFile1 =fs.readFileSync(path.join(__dirname, '../paserfile/hyomin.json'));
const data1 = JSON.parse(jsonFile1);


module.exports = {
	data: new SlashCommandBuilder()
		.setName('내식')
		.setDescription('내일 기숙사 식단을 보내드림니다.'),
	async execute(interaction) {
        let today = new Date();   
        let day = today.getDay();
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
            interaction.reply({embeds: [happy], ephemeral: true});         
         }
		await interaction.reply('Pong!');
	},

};