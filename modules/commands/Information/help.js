const Discord = require("discord.js");
const { swap_pages2 } = require("../../utilfunctions")
const { Roles } = require("../../../settings.json");
module.exports = {
    name: "help", 
    category: "Information", 
    aliases: ["h", "commandinfo", "cmds", "cmd", "halp"],
    description: "Returns all Commmands, or one specific command", 
    run: async (client, message, args, prefix) => {
        
        var embed1 = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setAuthor("🛸Astrom | Order Bot | Bot Development</> | Commands Help", message.guild.iconURL({dynamic: true}), "https://discord.io/astrom")
        .addField("\`b!help\`", "*Shows all commands*", true)
        .addField("\`b!invite @BOT / BOTNAME\`", "*gives u an invite link for a BOT*", true)
        .addField("\`b!ping\`", "*Shows the Ping of the Bot*", true)
            //.addField("\u200b", "\u200b")
        .addField("\`b!uptime\`", "*Shows the Uptime of the Bot*", true)
        .addField("\`b!info wait/music/clan/etc.\`", "*Gives Information About the Bots, we offer*", true)
            //.addField("\u200b", "\u200b")
        .addField("\`b!howtoorder\`", "*Shows how to order a BOT*\n*See the information in <#990585175983415386> & <#990585102364987432>!*", true)
            //.addField("\u200b", "\u200b")
        .addField("\`b!owner @Bot\`", "*Shows who the Owner of the Bot is*", true)
        .addField("\`b!bots @USER\`", "*Shows the Bots of a User*", true)
        .addField("\`b!botdetails @BOT\`", "*Shows details about a Bot*", true)
        .addField("\`b!paymentinfo @BOT\`", "*Shows the Payment Information about a Bot*", true)
            //.addField("\u200b", "\u200b")
        .addField("\`b!translate from to ...\`", "*Translates Text from a Language to a Language*\n**Alias:** `tr`", true)
        .addField("\`b!modifybot\`", "Shows Info how to Change a CUSTOM BOT from <#990585175983415386>*", true)
        .addField("\`b!sendmessage\`", "*Shows Info how to Send a MESSAGE with a CUSTOM BOT*", true)



    var embed2 = new Discord.MessageEmbed()
        .setColor("YELLOW")
        .setAuthor("🛸Astrom | Order Bot | Bot Development</> | BOT CREATOR Help", message.guild.iconURL({dynamic: true}), "https://discord.io/astrom")
        .addField("\`b!createbot\` --> Pick the Bot", "*Creates a Order-Bot*", true)
        .addField("\`b!cancelcreation\`", "*Cancels the Bot Creation Protection*", true)
        .addField("\`b!startbot <@Bot>\`", "*Starts a Bot*", true)
        .addField("\`b!restartbot <@Bot>\`", "*Restarts a Bot*", true)
        .addField("\`b!stopbot <@Bot>\`", "*Stops a Bot*", true)
        .addField("\`b!shell\`", "*Run Somethig In Console/Shell*", true)
        .addField("\`b!removebothost <@Bot>\`", "*Removes a Bot from the Host*", true)
        .addField("\`b!recoverbothost <@Bot>\`", "*Recovers a Bot, which got removed from the Host*", true)
        .addField("\`b!forcestartbot <@Bot>\`", "*Force-Starts a Bot*", true)
        .addField("\`b!forcerestartbot <@Bot>\`", "*Force-Restarts a Bot*", true)
        .addField("\`b!forcestopbot <@Bot>\`", "*Force-Stops a Bot*", true)
        .addField("\`b!botmanagement\` | \`,bm\`", "*Manages the Bots on all hosts [Use only when needed]*", true)



    var embed3 = new Discord.MessageEmbed()
        .setColor("RED")
        .setAuthor("🛸Astrom | Order Bot | Bot Development</> | Ticket Commands (STAFF Only)", message.guild.iconURL({dynamic: true}), "https://discord.io/astrom")
        .addField("\`b!close\`", "*Closes the Current Ticket*", true)
        //.addField("\`b!setsaksh\`", "*Sets the Ticket to a Saksh Ticket*", true)
        .addField("\`b!setowner\`", "*Sets the Ticket to a Owner Ticket*", true)
        .addField("\`b!setmigrate\`", "*Sets the Ticket to a Migrate Ticket*", true)
        .addField("\`b!setmod\`", "*Sets the Ticket to a Mod+ Ticket*", true)
        .addField("\`b!setimportant\`", "*Sets the Ticket into an Important State*", true)
        .addField("\`b!setwaiting\`", "*Sets the Ticket into a Waiting for Customer Response State*", true)
        .addField("\`b!setfinished\`", "*Sets the Ticket into a Finish State*", true)
        .addField("\`b!setbot\`", "*Notifies the Bot Creators to create the Bot*", true)
        .addField("\`b!addticket <@User>\`", "*Adds a User from the Ticket*", true)
        .addField("\`b!removeticket <@User>\`", "*Removes a User from the Ticket*", true)
        .addField("\`b!closeall\`", "*Deletes all closed Tickets*", true)


    var embed4 = new Discord.MessageEmbed()
        .setColor("ORANGE")
        .setAuthor("🛸Astrom | Order Bot | Bot Development</> | Higher Staff (Bot Management Commands)", message.guild.iconURL({dynamic: true}), "https://discord.io/astrom")
        .addField("\`b!addbot <@USER> <@Bot <BOTTYPE>\`", "*Adds a Bot to a User*", true)
        .addField("\`b!removebot <@USER> <@Bot>\`", "*Removes a Bot to a User*", true)
        .addField("\`b!changebot <@USER> <@Bot> <BOTTYPE>\`", "*Changes a Bot*", true)
        .addField("\`b!setneworiginalbot\`", "*sets a new original Bot info into the DB*", true)
        .addField("\`b!rank [@User]\`", "Shows the Rank of a User!",true)
        .addField("\`b!leaderboard [Days to Show]\`", "Shows the Staff Leaderboard\n**Alias**: \`,lb\`",true)
            //.addField("\u200b", "\u200b")
        .addField("\`b!payment <Time> <@User> <@Bot>\`", "*Notes the Payment*", true)
        .addField("\`b!invitepayment <Time> <@User> <@Bot>\`", "*Notes the Payment for Invites*", true)
        .addField("\`b!boostpayment <Time> <@User> <@Bot>\`", "*Notes the Payment for 2xBoosts*", true)
        .addField("\`b!removepayment <Time> <@Bot>\`", "*Removes the Payment(s) of this Bot, so that you can set the Payment(s) again!*", true)
        .addField("\`b!noguildremovebothost\`", "*Removes bot host of all no guild bots*", true)
        .addField("\`b!eval\`", "*Eval Command (Only Developers)*", true)

        var embed5 = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setAuthor("🛸Astrom | Order Bot | Bot Development</> Other Setup Commands", message.guild.iconURL({dynamic: true}), "https://discord.io/astrom")
        .addField("\`b!setuporder\`", "*Setup Order Ticket*", true)
        .addField("\`b!setupverify\`", "*Setup Verification Channel*", true)
        .addField("\`b!setupsuggest\`", "*Setup Suggestion Channel*", true)
        .addField("\`b!setupnodestats\`", "*Setup Status Role System*", true)
        .addField("\`b!setupfeatures\`", "*Setup Features Channel*", true)
        .addField("\`b!setupfeedback\`", "*Setup Feedback Channel*", true)

    var embed6 = new Discord.MessageEmbed()
        .setColor("WHITE")
        .setAuthor("🛸Astrom | Order Bot | Bot Development</> Order Setup Commands", message.guild.iconURL({dynamic: true}), "https://discord.io/astrom")
        .addField("\`b!togglepartnerapply\`", "*Enables/Disables the Partner Apply System*", true)
        .addField("\`b!toggleteamapply\`", "*Enables/Disables the Team Apply System*", true)
            //.addField("\u200b", "\u200b")
        .addField("\`b!togglegeneral\`", "*Enables/Disables the General Ticket System*", true)
        .addField("\`b!togglesource\`", "*Enables/Disables the Source Order*", true)
        .addField("\`b!togglecustom\`", "*Enables/Disables the Custom Source Order*", true)
            //.addField("\u200b", "\u200b")
        .addField("\`b!toggleclanbot\`", "*Enables/Disables the Astrom Bot Order*", true)
        .addField("\`b!toggleadmin\`", "*Enables/Disables the Moderation Bot Order*", true)
        .addField("\`b!togglemusicbot\`", "*Enables/Disables the Music Bot Order*", true)
        .addField("\`b!togglerythmclone\`", "*Enables/Disables the Mini-All in 1 Bot Order*", true)
        .addField("\`b!togglewaitingroom\`", "*Enables/Disables the All in 1 Bot Order*", true)
        //.addField("\`b!togglemodmail\`", "*Enables/Disables the Mod Mail Bot Order*", true)
            //.addField("\u200b", "\u200b")
        .addField("\`,ensure\` / \`,savedb\` / \`,resetsettings\`", "*Ensures / Saves the Database, so that the default Data get's applied*", true)


    swap_pages2(client, message, [
        embed1,
        embed2,
        embed3,
        embed4,
        embed5,
        embed6,
    ]);
    }
}