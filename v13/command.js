const { Client } = require("discord-slash-commands-client");
const { token } = require('./config.json');

const client = new Client(
    token,
    576408873867673630
);

// Global Command 등록의 경우
client.createCommand({
    name: "ping",
    description: "test",
});
