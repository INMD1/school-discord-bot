const {
    SlashCommandBuilder
} = require('@discordjs/builders');
const Discord = require("discord.js");
const { see } = require('../jsonfile/config.json');
const cheerio = require('cheerio');
const request = require('request');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('star')
        .setDescription('별자리를 알려줘요!')
        .addStringOption(option =>
            option.setName('선택')
                .setDescription('볼 별자리를 선택해주세요.')
                .setRequired(true)
                .addChoice('물병자리', '물병자리')
                .addChoice('물고기자리', '물고기자리')
                .addChoice('양자리', '양자리')
                .addChoice('황소자리', '황소자리')
                .addChoice('쌍둥이자리', '쌍둥이자리')
                .addChoice('게자리', '게자리')
                .addChoice('사자자리', '사자자리')
                .addChoice('처녀자리', '처녀자리')
                .addChoice('천창자리', '천창자리')
                .addChoice('전갈자리', '전갈자리')
                .addChoice('사수자리', '사수자리')
                .addChoice('염소자리', '염소자리')),
    async execute(interaction) {
        const gettext = interaction.options.getString('선택');
        if (gettext === '물병자리') {
            let form = 'https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&query=%EB%AC%BC%EB%B3%91%EC%9E%90%EB%A6%AC%20%EC%9A%B4%EC%84%B8';
            getdata(form);
        } else if (gettext === '물고기자리') {
            let form = 'https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&query=%EB%AC%BC%EA%B3%A0%EA%B8%B0%EC%9E%90%EB%A6%AC%20%EC%9A%B4%EC%84%B8';
            getdata(form);
        } else if (gettext === '양자리') {
            let form = 'https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&query=%EC%96%91%EC%9E%90%EB%A6%AC%20%EC%9A%B4%EC%84%B8';
            getdata(form);
        } else if (gettext === '황소자리') {
            let form = 'https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&query=%ED%99%A9%EC%86%8C%EC%9E%90%EB%A6%AC%20%EC%9A%B4%EC%84%B8';
            getdata(form);
        } else if (gettext === '쌍둥이자리') {
            let url = 'https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&query=%EC%8C%8D%EB%91%A5%EC%9D%B4%EC%9E%90%EB%A6%AC%20%EC%9A%B4%EC%84%B8';
            getdata(form);
        } else if (gettext === '게자리') {
            let form = 'https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&query=%EA%B2%8C%EC%9E%90%EB%A6%AC%20%EC%9A%B4%EC%84%B8';
            getdata(form);
        } else if (gettext === '사자자리') {
            let form = 'https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&query=%EC%82%AC%EC%9E%90%EC%9E%90%EB%A6%AC%20%EC%9A%B4%EC%84%B8';
            getdata(form);
        } else if (gettext === '처녀자리') {
            let form = 'https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&query=%EC%B2%98%EB%85%80%EC%9E%90%EB%A6%AC%20%EC%9A%B4%EC%84%B8';
            getdata(form);
        } else if (gettext === '천창자리') {
            let form = 'https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&query=%EC%B2%9C%EC%B9%AD%EC%9E%90%EB%A6%AC%20%EC%9A%B4%EC%84%B8';
            getdata(form);
        } else if (gettext === '전갈자리') {
            let form = 'https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&query=%EC%A0%84%EA%B0%88%EC%9E%90%EB%A6%AC%20%EC%9A%B4%EC%84%B8';
            getdata(form);
        } else if (gettext === '사수자리') {
            let form = 'https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&query=%EC%82%AC%EC%88%98%EC%9E%90%EB%A6%AC%20%EC%9A%B4%EC%84%B8';
            getdata(form);
        } else if (gettext === '염소자리') {
            let form = 'https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&query=%EC%97%BC%EC%86%8C%EC%9E%90%EB%A6%AC%20%EC%9A%B4%EC%84%B8';
            getdata(form);
        }

        function getdata(url) {
            const RL = url;
            let data = new Array(),
                up_date,
                up_time;

            request(url, function (error, response, html) {
                if (!error) {
                    const $ = cheerio.load(html);


                    $('#yearFortune > div > div.detail.detail2 > h6 > ul > li.first_lst > a').each(function () {
                        const data_info = $(this);
                        const data_info_text = data_info.text();
                        title1 = data_info_text;
                    })
                    $('#yearFortune > div > div.detail.detail2 > p:nth-child(3)').each(function () {
                        const data_info = $(this);
                        const data_info_text = data_info.text();
                        text1 = data_info_text;
                    });
                    const send = new Discord.MessageEmbed()
                        .setColor('#01DF01')
                        .setTitle(title1)
                        .setURL(url)
                        .setDescription(text1)
                        .setThumbnail('https://search.pstatic.net/common?type=o&size=75x75&quality=90&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Foutside%2Fsign%2Fimg%2F20140305%2Fimg_sign01.png')
                        .addField('출처', `네이버 말띠 운세`, true)
                        .setTimestamp()
                        .setFooter('Ubuntu 20.04 LTS', 'https://avatars1.githubusercontent.com/u/41885157?s=40&u=285801175efe4af1c2e21b821160fdcaf996b898&v=4');
                    interaction.reply({
                        embeds: [send], ephemeral: see
                    });
                    console.log("별자리(이)가 성공적으로 로드가 됨 구역1");
                }
            });
        }
    },

};