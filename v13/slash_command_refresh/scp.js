const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const {token, clientId } = require('../jsonfile/config.json');
const fs = require('fs');

const Secretss = [];
const Secrets = fs.readdirSync('../Secret').filter(file => file.endsWith('.js'));

const publics = [];
const commandFiles = fs.readdirSync('../public').filter(file => file.endsWith('.js'));


for (const file of commandFiles) {
	// 공개 명령어
	const public = require(`../public/${file}`);
	publics.push(public.data.toJSON());
}

for (const file of Secrets) {
	//비공개 명령어
	const Secret = require(`../Secret/${file}`);
	Secretss.push(Secret.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
	try {
		console.log('Started refreshing application (/) Secret commands.');

		await rest.put(
			Routes.applicationCommands(clientId),
			{ body: publics },
		);

		await rest.put(
			Routes.applicationCommands(clientId),
			{ body: Secretss },
		);

		console.log('Successfully reloaded application (/) Secret commands.');
	} catch (error) {
		console.error(error);
	}
})();