const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const {token} = require('./jsonfile/config.json');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const timer = require('./paser/timer.js')
os = require('os');

client.commands = new Collection();

const publicfile = fs.readdirSync('./public').filter(file => file.endsWith('.js'));
const Secretsfile = fs.readdirSync('./Secret').filter(file => file.endsWith('.js'));

// 서버에서 사용할 명령어 준비
for (const file of publicfile) {
	const command = require(`./public/${file}`);
	client.commands.set(command.data.name, command);
	
}

// DM에서 사용할 명렁어 파일 준비
for (const file of Secretsfile) {
	const command = require(`./Secret/${file}`);
	client.commands.set(command.data.name, command);
}

client.once('ready', () => {
	client.user.setActivity("v13 업데이트! /를 입력해주세요.")
	console.log('-----------------');
	console.log('  운영체제 정보');
	console.log('-----------------');
	console.log('운영체제',os.arch());
	console.log('운영체제 os', os.type());
	console.log('운영체제 버전', os.release());
  
	console.log('-----------------');
	console.log("     봇 로그");
	console.log('-----------------');
  
  
	const moment = require('moment'); 
	require('moment-timezone'); 
	moment.tz.setDefault("Asia/Seoul"); 
	const time = moment().format('YYYY-MM-DD HH:mm:ss');
	  setTimeout(function(){
		console.log(time + " 봇을 활성화 했습니다.");
	   }, 1000);
	  setTimeout(function(){
	 }, 4000);
	});

	//paser 프로그램 실행
	timer;
	let today = new Date();
	console.log('paser 실행됨 ' + today);
	//paser 스케줄러
	const schedule = require('node-schedule');
	const rule = new schedule.RecurrenceRule();
	rule.dayOfWeek = [0, new schedule.Range(1)];
	rule.hour = 00
	rule.minute = 05;
	const k = schedule.scheduleJob(rule, () => {
	    var moment = require('moment');
	    require('moment-timezone');
	    moment.tz.setDefault("Asia/Seoul");
	    var date = moment().format('YYYY-MM-DD HH:mm:ss');
	    console.log("데이터를 수집함니다.");
	    console.log(date);
		timer;
		console.log('paser 다시 실행됨 ' + today);
	})


client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);
	interaction.options.ge
	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});



client.login(token);



