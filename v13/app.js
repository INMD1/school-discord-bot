const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const { Routes } = require('discord-api-types/v9');
const { REST } = require('@discordjs/rest');
const { token } = require('./config.json');

// Place your client and guild ids here
const clientId = '576408873867673630';
const guildId = '557221073637081099';

client.on('ready', () => {
  // Your bot ready logic
  console.log("봇 활동 시작");
  client.user.setActivity("I'm Ready!");

});

const commands = [{
  name: 'ping',
  description: 'Replies with Pong!',
}]; 


const rest = new REST({ version: '9' }).setToken(token);

(async () => {
	try {
		console.log('Started refreshing application (/) commands.');

		await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: commands },
		);

		console.log('Successfully reloaded application (/) commands.');
	} catch (error) {
		console.error(error);
	}
})();

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});

client.login(token);