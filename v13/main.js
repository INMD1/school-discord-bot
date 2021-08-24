const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const { token, admin } = require('./jsonfile/config.json');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });


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
	console.log('Ready!');
});

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



