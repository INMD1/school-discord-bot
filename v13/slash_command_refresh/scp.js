const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { token} = require('../jsonfile/config.json');
const fs = require('fs');

const Secretss = [];
const Secrets = fs.readdirSync('../Secret').filter(file => file.endsWith('.js'));

// Place your client and guild ids here
const clientId = '826082134766780426';
const guildId = '820326481074716725';

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
			{ body: Secretss },
		);

		console.log('Successfully reloaded application (/) Secret commands.');
	} catch (error) {
		console.error(error);
	}
})();