const Discord = require("discord.js");
const client = new Discord.Client();

const prefix = "!";
const commands = require("./scripts/commandsReader")(prefix);

client.on("ready", () => {
  console.log(`Logado em ${client.user.tag}!`);
});

client.on("message", (msg) => {
  if (!msg.author.bot) {
    console.log(`${msg.author.username}: ${msg.content}`);

    const args = msg.content.split(" ");
    if (commands[args[0]]) commands[args[0]](client, msg);
  }
});
client.login("NzExMDIxNDgwOTEzMTQxODQx.Xr888Q.F0fiH6KJAzsQv2lo_s7-A79R2UY");
