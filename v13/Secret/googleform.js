const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment } = require('discord.js');
const { MessageActionRow, MessageButton } = require('discord.js');
const Canvas = require('canvas');

// 개인정보 저장및불려오기
const fs = require('fs');
const jsonFile = fs.readFileSync('./jsonfile/scret.json', 'utf8');
const data = JSON.parse(jsonFile);

// 백그라운드 브라우저 매크로 라이브러리
const puppeteer = require('puppeteer');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('잔류신청')
		.setDescription('DOD동아리 야간잔류 신청을 디스코드에서 가능해요!')
		.addUserOption(option => 
			option.setName('target')
			.setDescription('Select a user')),
	async execute(interaction) {
		const user = interaction.options.getUser('target');	
		if(`${user.id}` == '576408873867673630'){
			interaction.reply("봇은 하면 안됨니다!");
		}
		if(data[`${user.id}`]){
			await interaction.reply('Pong!');
            const id = data[`${user.id}`].id;
            const name = data[`${user.id}`].name;
            const body = data[`${user.id}`].body;
            console.log(id + name + body);
			const browser = await puppeteer.launch({
				headless: false
			  }); 
			  const page = await browser.newPage();
			  await page.setViewport({
				width: 1366,
				height: 768
			  });			 
			  await page.goto('https://docs.google.com/forms/d/e/1FAIpQLScLtvAick_2UlHAmc09tg5WypE9qP7w6xkmsFzEIU0mSSf6Eg/viewform'),
        	  await page.waitForNavigation( ),
        	  await page.type("#mG61Hd > div.freebirdFormviewerViewFormCard.exportFormCard > div > div.freebirdFormviewerViewItemList > div:nth-child(1) > div > div > div.freebirdFormviewerComponentsQuestionTextRoot > div > div.quantumWizTextinputPaperinputMainContent.exportContent > div > div.quantumWizTextinputPaperinputInputArea > input", id),
        	  await page.type("#mG61Hd > div.freebirdFormviewerViewFormCard.exportFormCard > div > div.freebirdFormviewerViewItemList > div:nth-child(2) > div > div > div.freebirdFormviewerComponentsQuestionTextRoot > div > div.quantumWizTextinputPaperinputMainContent.exportContent > div > div.quantumWizTextinputPaperinputInputArea > input", name),
        	  await page.type("#mG61Hd > div.freebirdFormviewerViewFormCard.exportFormCard > div > div.freebirdFormviewerViewItemList > div:nth-child(4) > div > div > div.freebirdFormviewerComponentsQuestionTextRoot > div > div.quantumWizTextinputPaperinputMainContent.exportContent > div > div.quantumWizTextinputPaperinputInputArea > input", body),
			  await page.click("#i16");
			  await page.screenshot({               
            	path: './screenshot/screenshot_a_'+id+'.png',            
            	fullPage: true                      
        		});
				const attachment1 = new MessageAttachment( './screenshot/screenshot_a_'+id+'.png');		
				interaction.followUp({content: '작업중', files: [attachment1] });
			  await page.click("#mG61Hd > div.freebirdFormviewerViewFormCard.exportFormCard > div > div.freebirdFormviewerViewNavigationNavControls > div.freebirdFormviewerViewNavigationButtonsAndProgress > div > div > span > span");
			  await page.waitForNavigation( ),
              await page.screenshot({               
            	path:  './screenshot/screenshot_a_'+id+'.png',           
            	fullPage: true                      
        		});
			  await page.close();
			  await browser.close();
				const attachment = new MessageAttachment( './screenshot/screenshot_a_'+id+'.png');			
				interaction.followUp({content: '작업끝', files: [attachment] });
	
		}else{
			interaction.reply("당신은 전산정보에 등록을 안했습니다. 봇 관리자한데 문의 해주세요.");
		}
	},
};