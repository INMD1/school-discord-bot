const Discord = require('discord.js');
const weather = require('weather-js');

const {
    SlashCommandBuilder
} = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('날씨')
        .setDescription('지역을 입력하면 날씨를 알려줌니다.')
        .addStringOption(option =>
            option.setName('지역')
            .setDescription('지역을 입력해주세요')
            .setRequired(true)),
    async execute(interaction) {
            weather.find({
                search: interaction.options.getString('지역'),
                degreeType: 'C'
            }, function (err, result) {
                if (err) message.channel.send(err);

                if (result.length === 0) {
                    interaction.reply('**올바른 위치를 입력하십시오.**')
                    return;
                }

                var current = result[0].current;
                var location = result[0].location;

                const embed = new Discord.MessageEmbed()
                    .setDescription(`**${current.skytext}**`)
                    .setAuthor(`입력한 지역 ${current.observationpoint}`)
                    .setThumbnail(current.imageUrl)
                    .setColor(0x00AE86)
                    .addField('시간대', `UTC${location.timezone}`, true)
                    .addField('단위유형', location.degreetype, true)
                    .addField('온도', `${current.temperature} Degrees`, true)
                    .addField('체감온도', `${current.feelslike} Degrees`, true)
                    .addField('바람', current.winddisplay, true)
                    .addField('습도', `${current.humidity}%`, true)
                    .addField('npm 출처', 'https://www.npmjs.com/package/weather-js', true)
                    interaction.reply({embeds: [embed], ephemeral: true});         

            });
    }
};