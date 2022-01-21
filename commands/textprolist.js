const textpr = require('../textpro/textpros.json');
const execute = async (client, msg, args) => {
    var list = [];
    for(var i = 0; i < textpr.length; i++) {
        var num = textpr[i].name + " - " + textpr[i].description;
        list.push(num);
    }
    const lists = list.toString().replace(/ *, */g, '\n\n');
    await msg.reply("*Available textpros:*\n\n" + lists + "\n\n*©️ Elsa Wa-Bot*");

}

module.exports = {
    name: "textprolist",
    description: "To grt the list of Textpros",
    command: "!textprolist",
    commandType: "plugin",
    isDependent: false,
    help: undefined,
    execute,
  };