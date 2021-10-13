const {SlashCommandBuilder} = require('@discordjs/builders');
const Discord = require('discord.js');
const {see} = require('../jsonfile/config.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('music_chart')
		.setDescription('멜론 뮤직 차트를 알려줌니다.'),
		 execute(interaction) {
		let cheerio = require('cheerio');
		let request = require('request');

		let today = new Date();   
		console.log('멜론차트이 정상적으로 실행됨 ' + today);

		let url = 'http://www.melon.com/chart/';
		let title = new Array(),
			artist = new Array(),
			up_date,
			up_time;
			let rank = 10; //10위까지 확인


		request(url, function (error, response, html) {
			if (!error) {
				let $ = cheerio.load(html);

				// 곡명 파싱
				for (let i = 0; i < rank; i++) {
					$('.ellipsis.rank01 > span > a').each(function () {
						let title_info = $(this);
						let title_info_text = title_info.text();
						title[i] = title_info_text;
						i++;
					})
				}

				// 아티스트명 파싱
				for (let i = 0; i < rank; i++) {
					$('.checkEllipsis').each(function () {
						let artist_info = $(this);
						let artist_info_text = artist_info.text();
						artist[i] = artist_info_text;
						i++;
					})
				}

				// 업데이트 날짜
				$('.year').each(function () {
					let date_info = $(this);
					let date_info_text = date_info.text();
					up_date = date_info_text;
				})

				// 업데이트 시간
				$('.hhmm > span').each(function () {
					let time_info = $(this);
					let time_info_text = time_info.text();
					up_time = time_info_text;
				})

				//xxxx년 xx월 xx일 오후/오전 xx시 format
				let up_date_arr = new Array();
				let up_date_arr = up_date.split('.');
				let up_time_arr = new Array();
				let up_time_arr = up_time.split(':');
				let newtime;

				// 오후 오전 삽입
				if (up_time_arr[0] > 12) {
					up_time_arr[0] = up_time_arr[0] - 12
					newtime = "오후 " + up_time_arr[0];
				} else {
					newtime = "오전 " + up_time_arr[0];
				}
				const send = new Discord.MessageEmbed()
					.setColor(' #66FF33 ')
					.setTitle('멜론 top10')
					.setDescription("(" + up_date_arr[0] + "년 " + up_date_arr[1] + "월 " + up_date_arr[2] + "일 " + newtime + "시에 업데이트됨)")
					.addField('1위', title[0] + " - " + artist[0])
					.addField('2위', title[1] + " - " + artist[1])
					.addField('3위', title[2] + " - " + artist[2])
					.addField('4의', title[3] + " - " + artist[3])
					.addField('5위', title[4] + " - " + artist[4])
					.addField('6위', title[5] + " - " + artist[5])
					.addField('7위', title[6] + " - " + artist[6])
					.addField('8위', title[7] + " - " + artist[7])
					.addField('9위', title[8] + " - " + artist[8])
					.addField('10위', title[9] + " - " + artist[9])
				 interaction.reply({embeds: [send], ephemeral: see});
			}
		});
	},
};