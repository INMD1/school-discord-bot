const Discord = require("discord.js");
const weather = require("weather-js");
const { see } = require("../jsonfile/config.json");

const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("conch")
    .setDescription("질문을 하면 대답을 해줘요!")
    .addStringOption((option) =>
      option
        .setName("ask")
        .setDescription("질문할 내용을 적어주세요. (성의없게 답할수 있습)")
        .setRequired(true)
    ),
  async execute(interaction) {
    const string = interaction.options.getString('ask');
    const ask = [
      "안돼",
      "물론",
      "넌 왜그러니 나한데",
      "안되요",
      "그건좀..",
      "stop!",
      "다시 해봐",
      "나도 몰라",
      "하면 그사람",
      "그래",
      "돼",
      "돌아가",
      "일이나 하세요^^",
    ];
    let askuNum = Math.floor(Math.random() * 13);
    let result = ask[askuNum];
    console.log("정상적으로 답변을 보냄(소라고동 명렁어 부분)");
    const send = new Discord.MessageEmbed()
      .setColor("#DEB887")
      .setTitle("마법에 소라고동")
      .addFields({ name: '질문 내용', value: string })
      .addFields({ name: '답변 내용', value: result })
      .setTimestamp();
      interaction.reply({embeds: [send]});
  },
};
