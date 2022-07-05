//IMPORTING NPM PACKAGES
const { MessageEmbed } = require('discord.js');
const emoji = require("../../emoji");
/**
 * STARTING THE MODULE WHILE EXPORTING THE CLIENT INTO IT
 * @param {*} client 
 */

module.exports = async (client) => {
    const mainconfig = require("../../mainconfig")
    

    client.on("guildMemberUpdate", async (oM, nM) => {
        let boostLogChannelId = `${mainconfig.BoostLogChannel}`
        let boostLogChannel = nM.guild.channels.cache.get(boostLogChannelId);
        if(!boostLogChannel) boostLogChannel = await nM.guild.channels.fetch(boostLogChannelId).catch(()=>{}) || false;
        if(!boostLogChannel) return;
        
        let stopBoost = new MessageEmbed()
            .setFooter("ID: " + nM.user.id)
            .setTimestamp()
            .setAuthor(nM.user.tag, nM.user.displayAvatarURL({dynamic: true}))
            .setColor("RED")
            .setDescription(`<:boost:990605234592157726>  ${nM.user} **stopped Boosting us..** <a:Pray:991336710883508274>`)
        let startBoost = new MessageEmbed()
            .setFooter("ID: " + nM.user.id)
            .setTimestamp()
            .setAuthor(nM.user.tag, nM.user.displayAvatarURL({dynamic: true}))
            .setColor("GREEN")
            .setDescription(`<:boost:990605234592157726> ${nM.user} **has boosted us!** <a:loading:990473600559640586>`)
        //if he/she starts boosting
        if(!oM.premiumSince && nM.premiumSince) {
            boostLogChannel.send({embeds: [startBoost]}).catch(console.warn);
            //send the MEMBER a DM
            nM.send("❤️ Thank you for Boosting our Server!!\n\n❤️ ***We really appreciate it!***").catch(console.warn)
        }
        //if he/she stops boosting
        if(oM.premiumSince && !nM.premiumSince) {
            boostLogChannel.send({embeds: [stopBoost]}).catch(console.warn)
        }
    });
  
}

