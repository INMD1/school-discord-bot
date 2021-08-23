module.exports = {	
	name: 'chart',
	execute(message) { 
		const Discord = require('discord.js');       
			var cheerio = require('cheerio');
			var request = require('request');
			 
			var url = 'http://www.melon.com/chart/';
			var title = new Array(),
				artist = new Array(),
				up_date,
				up_time;
			var rank = 10;  //10위까지 확인
			 
			 
			request(url, function(error, response, html){
			  if (!error) {
				var $ = cheerio.load(html);
			 
			   // 곡명 파싱
				for (var i = 0; i < rank; i++) {
				  $('.ellipsis.rank01 > span > a').each(function(){
					var title_info = $(this);
					var title_info_text = title_info.text();
					title[i] = title_info_text;
					i++;
				  })
				}
			 
				// 아티스트명 파싱
				for (var i = 0; i < rank; i++) {
				  $('.checkEllipsis').each(function(){
					var artist_info = $(this);
					var artist_info_text = artist_info.text();
					artist[i] = artist_info_text;
					i++;
				  })
				}
			 
				// 업데이트 날짜
				$('.year').each(function(){
				  var date_info = $(this);
				  var date_info_text = date_info.text();
				  up_date = date_info_text;
				})
			 
				// 업데이트 시간
				$('.hhmm > span').each(function(){
				  var time_info = $(this);
				  var time_info_text = time_info.text();
				  up_time = time_info_text;
				})
			 
				//xxxx년 xx월 xx일 오후/오전 xx시 format
				var up_date_arr = new Array();
				var up_date_arr = up_date.split('.');
				var up_time_arr = new Array();
				var up_time_arr = up_time.split(':');
				var newtime;
			 
				// 오후 오전 삽입
				if (up_time_arr[0] >12) {
				  up_time_arr[0] = up_time_arr[0] - 12
				  newtime = "오후 "+up_time_arr[0];
				} else {
				  newtime = "오전 " +up_time_arr[0];
				}
			 
				const send = new Discord.MessageEmbed()
				.setColor(' #66FF33 ')
				.setTitle('멜론 top10')	     	     
				.setDescription("("+up_date_arr[0]+"년 "+up_date_arr[1]+"월 "+up_date_arr[2]+"일 "+newtime+"시에 업데이트됨)")
				.addField('1위', title[0] + " - " + artist[0])
				.addField('2위', title[1] + " - " + artist[1])
				.addField('3위', title[2] + " - " + artist[2])
				.addField('4의', title[3] + " - " + artist[3])
				.addField('5위', title[4] + " - " + artist[4])
				.addField('6위', title[5] + " - " + artist[5])
				.addField('7위', title[6] + " - " + artist[6])
				.addField('8위', title[7] + " - " + artist[7])
				.addField('9위', title[8] + " - " + artist[8])
				.addField('10위',title[9] + " - " + artist[9])
			   
				message.channel.send(send);
				/*
				// 콘솔창 출력
		
				message.channel.send("< 멜론 차트 1 ~ "+rank+"위 >");
			 
				// 순위 제목 - 아티스트명
				for (var i = 1; i < rank+1; i++) {
				  message.channel.send(i+ "위" + " " + title[i-1] + " - " + artist[i-1]);
				}
				// 업데이트 시간
				message.channel.send("("+up_date_arr[0]+"년 "+up_date_arr[1]+"월 "+up_date_arr[2]+"일 "+newtime+"시에 업데이트됨)");
				*/
			  }
			});			  
	},
};