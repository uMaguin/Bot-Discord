const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("Pong!");
  }
});

client.login("NzExMDIxNDgwOTEzMTQxODQx.Xr888Q.F0fiH6KJAzsQv2lo_s7-A79R2UY");
