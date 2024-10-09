const fs = require('fs');
const path = require('path');
const {cmd , commands} = require('../command');
cmd({
    pattern: "pussy",
    alias: ["pusy"],
    use: '.yts sameer kutti',
    react: "🔎",
    desc: "Search and get details from youtube.",
    category: "search",
    filename: __filename

},
async(conn, mek, m,{from, l, quoted, body, isCmd, umarmd, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
   const filePath = path.join(__dirname, '../media/pussy.json');
   const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
if (body.toLowerCase() === text.toLowerCase()) {      
                await conn.sendPresenceUpdate('typing', from);
                await conn.sendMessage(from, { image: { url: data }, caption: `> created by sadeesha coder`}, { quoted: mek });


   }
        }
    }                
);



//var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/pussy.json'))
