const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { token } = require('../config.json');
const fs = require('fs');

const publics = [];

const commandFiles = fs.readdirSync('./public').filter(file => file.endsWith('.js'));

// Place your client and guild ids here
const clientId = '576408873867673630';
const guildId = '557221073637081099';

for (const file of commandFiles) {
	// 공개 명령어
	const public = require(`./public/${file}`);
	publics.push(public.data.toJSON());
}


const rest = new REST({ version: '9' }).setToken(token);

(async () => {
	try {
		console.log('Started refreshing application (/) public commands.');

		await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: publics },
		);

		console.log('Successfully reloaded application (/) public commands.');
	} catch (error) {
		console.error(error);
	}

	
})();