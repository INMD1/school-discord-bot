const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js"); //안쓸떄는 지워도 되요 근데 오류나면 지우세요.
const path = require('path');
const fs = require('fs');
const { see } = require('../jsonfile/config.json');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('dorm')
    .setDescription('오늘의 기숙사 식단을 보내드림니다.')
    .addStringOption(option =>
      option.setName('기숙사')
        .setDescription('기숙사를 선택해 주세요.')
        .addChoice('효민', 'hyomin')
        .addChoice('행긱', 'happy')),
        
  async execute(interaction) {
    let jsonFile = fs.readFileSync('/home/inmd/github/school-discord-bot/v13/paserfile/happy.json');
    let data = JSON.parse(jsonFile);

    let jsonFile1 = fs.readFileSync('/home/inmd/github/school-discord-bot/v13/paserfile/hyomin.json');
    let data1 = JSON.parse(jsonFile1);
    const boolean = interaction.options.getString('기숙사');
    let today = new Date();
    let day = today.getDay() - 1;
    console.log("식단정보이 성공적으로 로드함 " + today);
    if (day < 0) {
      const h = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .addField('경고!"', `일요일은 식단 정보를 제공하지 않습니다.`)
        .setTimestamp()
      interaction.reply({ embeds: [h], ephemeral: see });
    } else {
      if (boolean == 'happy') {
        const happy = new Discord.MessageEmbed()
          .setColor('#0099ff')
          .setTitle("행복기숙사 식사 정보")
          .addField('아침 일품', data[day].Breakfast_s, true)
          .addField('점심', data[day].lunch, true)
          .addField('점심 일품', data[day].lunch_s, true)
          .addField('저녁', data[day].dinner, true)
          .addField('저녁 일품', data[day].dinner_s, true)
          .setTimestamp()
        interaction.reply({ embeds: [happy], ephemeral: see });
      } else if (boolean == 'hyomin') {
        const hyomin = new Discord.MessageEmbed()
          .setColor('#0099ff')
          .setTitle("효민기숙사 식사")
          .addField('아침', data1[day].hBreakfast, true)
          .addField('점심', data1[day].hlunch, true)
          .addField('저녁', data1[day].hdinner, true)
          .setTimestamp()
        interaction.reply({ embeds: [hyomin], ephemeral: see });
      }
    }
  },

};