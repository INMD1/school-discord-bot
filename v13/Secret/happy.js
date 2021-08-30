const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment } = require('discord.js');
const { MessageActionRow, MessageButton } = require('discord.js');
const path = require('path');
// 개인정보 저장및불려오기
const fs = require('fs');
const jsonFile = fs.readFileSync(path.join(__dirname,'../jsonfile/scret.json'), 'utf8');
const data = JSON.parse(jsonFile);

// 백그라운드 브라우저 매크로 라이브러리
const puppeteer = require('puppeteer');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('효민기숙사')
		.setDescription('디스코드 봇으로 간편하게 발열체크를 하세요!')
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
            console.log("잔류 신청"+id + name);
			const browser = await puppeteer.launch({
				headless: false
			  }); 
			  const page = await browser.newPage();
			  await page.setViewport({
				width: 1366,
				height: 768
			  });			 
              await page.goto('https://forms.gle/tcABNdyMuBHEd3Hi9'),
              await page.waitForNavigation( ),
              await page.type("#mG61Hd > div.freebirdFormviewerViewFormCard.exportFormCard > div > div.freebirdFormviewerViewItemList > div:nth-child(1) > div > div > div.freebirdFormviewerComponentsQuestionTextRoot > div > div.quantumWizTextinputPaperinputMainContent.exportContent > div > div.quantumWizTextinputPaperinputInputArea > input", name[i]),
              await page.type("#mG61Hd > div.freebirdFormviewerViewFormCard.exportFormCard > div > div.freebirdFormviewerViewItemList > div:nth-child(2) > div > div > div.freebirdFormviewerComponentsQuestionTextRoot > div > div.quantumWizTextinputPaperinputMainContent.exportContent > div > div.quantumWizTextinputPaperinputInputArea > input", number[i]),
              await page.click("#i13"),
              await page.type("#mG61Hd > div.freebirdFormviewerViewFormCard.exportFormCard > div > div.freebirdFormviewerViewItemList > div:nth-child(4) > div > div > div.freebirdFormviewerComponentsQuestionTextRoot > div > div.quantumWizTextinputPaperinputMainContent.exportContent > div > div.quantumWizTextinputPaperinputInputArea > input", room[i]),
              await page.type("#mG61Hd > div.freebirdFormviewerViewFormCard.exportFormCard > div > div.freebirdFormviewerViewItemList > div:nth-child(5) > div > div > div.freebirdFormviewerComponentsQuestionTextRoot > div > div.quantumWizTextinputPaperinputMainContent.exportContent > div > div.quantumWizTextinputPaperinputInputArea > input", "36.1"),
              await page.click("#i37"),
              await page.click("#i47"),
              await page.click("#i57");
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