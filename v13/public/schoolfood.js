const Discord = require("discord.js");
const request = require("request")
const { see } = require('../jsonfile/config.json');

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('scholarship')
    .setDescription('수덕전 또는 정보공학관 식단을 보여줌니다!')
    .addStringOption(option =>
      option.setName('건물')
        .setDescription('건물을 선택해주세요')
        .setRequired(true)
        .addChoice('수덕전', '수덕전')
        .addChoice('정보공학관', '정보공학관')),
  async execute(interaction) {
    // 시간로드

    const today = new Date();
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day = ('0' + today.getDate()).slice(-2);

    // 주소
    const Sudeokjeon = "https://smart.deu.ac.kr/m/sel_dfood?date=" + year + month + day + "&gubun1=1&gubun2=1"
    const information = "https://smart.deu.ac.kr/m/sel_dfood?date=" + year + month + day + "&gubun1=1&gubun2=2"

    const boolean = interaction.options.getString('건물');
    console.log('학식이 정상적으로 실행됨 ' + today);
    if (boolean == '수덕전') {
      request(Sudeokjeon, function (err, res, body) {
        const data = JSON.parse(body);
        if (body == '{}') {
          interaction.reply({ embeds: [error], ephemeral: see });
          console.log('수덕전:err')
        } else {
          if (typeof data['수덕전 코너2'] !== 'undefined' && data['수덕전 코너2'] !== null) {
            const send0 = new Discord.MessageEmbed()
              .setColor(' #488AC7 ')
              .setTitle('수덕전 오늘식단')
              .addField('수덕전 코너1', '정식')
              .addField('수덕전 코너2', data['수덕전 코너2'][0].menuName)
              .addField('수덕전 예비용', '라면&라면밥')
            interaction.reply({ embeds: [send0], ephemeral: see });
          } else {
            const send0 = new Discord.MessageEmbed()
              .setColor(' #488AC7 ')
              .setTitle('수덕전 오늘식단')
              .addField('수덕전 코너1', '정식')
              .addField('수덕전 코너3', data['수덕전 코너3'][0].menuName)
              .addField('수덕전 예비용', '라면&라면밥')
            interaction.reply({ embeds: [send0], ephemeral: see });
          }
        }
      });
    } else if (boolean == '정보공학관') {
      request(information, function (err, res, body) {
        const data = JSON.parse(body);
        if (body == '{}') {
          interaction.reply({ embeds: [error1], ephemeral: see });
          console.log('정보공학관:err')
        } else {
          if (typeof data['정보공학관 코너2'] !== 'undefined' && data['정보공학관 코너2'] !== null) {
            const send1 = new Discord.MessageEmbed()
              .setColor(' #488AC7 ')
              .setTitle('정보공학관 오늘식단')
              .setDescription(year + "년 " + month + "월 " + day + "일")
              .addField('정보공학관 1코너', '정식')
              .addField('정보공학관 2코너', data['정보공학관 코너2'][0].menuName)
              .addField('정보공학관 4코너', '라면&라면밥')
            interaction.reply({ embeds: [send1], ephemeral: see });
          } else {
            const send1 = new Discord.MessageEmbed()
              .setColor(' #488AC7 ')
              .setTitle('정보공학관 오늘식단')
              .setDescription(year + "년 " + month + "월 " + day + "일")
              .addField('정보공학관 1코너', '정식')
              .addField('정보공학관 3코너', data['정보공학관 코너3'][0].menuName)
              .addField('정보공학관 4코너', '라면&라면밥')
            interaction.reply({ embeds: [send1], ephemeral: see });
          }
        }
      });
    }
    // 에려 메세지 양식
    const error = new Discord.MessageEmbed()
      .setColor('#F62217')
      .setTitle('수덕전 ERROR')
      .setDescription('오늘은 식단이 없거나 운영을 안합니다.')

    const error1 = new Discord.MessageEmbed()
      .setColor('#F62217')
      .setTitle('정보공학관 ERROR')
      .setDescription('오늘은 식단이 없거나 운영을 안합니다.')
  },
};