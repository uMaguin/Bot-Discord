const config = require("../config.json");
const commands = require("../scripts/commandsReader")(config.prefix);

const descriptions = {
  "!ajuda": "Use esses comandos para ver os comandos disponiveis",
};

module.exports = async (client, msg) => {
  var texto = "Comandos:";
  Object.keys(commands).forEach((command) => {
    texto += `\n ${command}: ${
      descriptions[command] ? descriptions[command] : "Não tem descricao"
    }`;
  });
  msg.reply(texto);
};

