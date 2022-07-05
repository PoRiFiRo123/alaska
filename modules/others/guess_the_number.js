
/**
 * STARTING THE MODULE WHILE EXPORTING THE CLIENT INTO IT
 * @param {*} client 
 */
const emoji = require("../../emoji");
const guessNumbers = [];
 module.exports = async (client) => {
    
    //GUESS THE NUMBER
    client.on("messageCreate", async (message) => {
        
        let channelID = "873209073225592842" //873209073225592842
        let hostID = `${"758564566035988511"}` //921430546813419550
        let accessRoleID = "990525076413743184" // 873208791963951125
        const validNumbers = [13526, 6622, 4917, 17126, 7743, 1143, 13540, 5446, 1101, 8433, 19574, 18633, 15097, 2895, 19155, 10881, 9130, 8029, 5948, 12117]
        const STILLvalidNumbers = [6622, 4917, 17126, 7743, 9130, 5948, 12117]
        
        if(message.guild && message.channel.id == channelID){
            if(STILLvalidNumbers.includes(parseInt(message.content)) && !guessNumbers.includes(parseInt(message.content))){
                guessNumbers.push(parseInt(message.content));
                await message.pin().catch(() => {});
                await message.reply(`<@&${accessRoleID}> **The \`${validNumbers.length - STILLvalidNumbers.lnegth + guessNumbers.length}.\` / \`${validNumbers.length}\` Number was found!**\n\n> ${message.author} **__${message.author.tag}__ is the Winner!**\n*DM <@${hostID}> to redeem your price!*`).catch(() => {});
                await message.react(`<a:tick:989969101311066133>>`).catch(() => {});//check      
                await message.react(`<a:Doggy_wink:993085928597901382>`).catch(() => {});
                await message.react(`<a:KEK_Boom:993086046097129572>`).catch(() => {});
                await message.react(`<:stonls:993086152070418502>`).catch(() => {});
                await message.react(`<:like:990126188951392296>`).catch(() => {});
            }
        }
    })
}
