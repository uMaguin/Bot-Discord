const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logado em ${client.user.tag}!`);
});

client.on("message", (msg) => {
  if (!msg.author.bot) {
    console.log(`${msg.author.username}: ${msg.content}`);
    if (msg.content == "alo") msg.reply(`alo`);
  }
});

client.login("NzExMDIxNDgwOTEzMTQxODQx.Xr888Q.F0fiH6KJAzsQv2lo_s7-A79R2UY");
