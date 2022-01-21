const thiccysapi = require('@phaticusthiccy/open-apis');
const textpr = require('../textpro/textpros.json');
const { MessageMedia } = require('whatsapp-web.js');

function splitStr(str, separator) {
    var string = str.split(separator);
    return string;
}

const execute = async (client, msg, args) => {

    var str = `${args}`;
    var separator = "|";
    var splitted = splitStr(str, separator);
    console.log(splitted);

    for (var i = 0; i < textpr.length; i++) {
        if (splitted[0] == textpr[i].name) {
            thiccysapi.textpro(textpr[i].url, splitted[1])
            .then(async function (data) { 
              try { 
                  console.log(data);
                  const media = await MessageMedia.fromUrl('https://textpro.me/images/user_image/2022/01/61ea44bad2e39.jpg');
                  client.sendMessage(msg.from, media, {caption: "*©️ Elsa Wa-Bot*"});
                  break;
              } catch(err) { 
                  console.log(err)
                  msg.reply("```" + "Error occured" + "```");
              } 
            });
        }
    }
    
}

module.exports = {
    name: "textpro",
    description: "To create beautiful text images",
    command: "!textpro <textpro name>|<text>",
    commandType: "plugin",
    isDependent: false,
    help: undefined,
    execute,
  };