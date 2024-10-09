/*────────────────────────────────────────────────────────────────────────────────────
─██████████████──██████──────────██████████████──████████──████████──██████████████─
─██░░░░░░░░░░██──██░░██──────────██░░░░░░░░░░██──██░░░░██──██░░░░██──██░░░░░░░░░░██─
─██░░██████░░██──██░░██──────────██░░██████████──████░░██──██░░████──██░░██████░░██─
─██░░██──██░░██──██░░██──────────██░░██────────────██░░░░██░░░░██────██░░██──██░░██─
─██░░██████░░██──██░░██──────────██░░██████████────████░░░░░░████────██░░██████░░██─
─██░░░░░░░░░░██──██░░██──────────██░░░░░░░░░░██──────██░░░░░░██──────██░░░░░░░░░░██─
─██░░██████░░██──██░░██──────────██░░██████████────████░░░░░░████────██░░██████░░██─
─██░░██──██░░██──██░░██──────────██░░██────────────██░░░░██░░░░██────██░░██──██░░██─
─██░░██──██░░██──██░░██████████──██░░██████████──████░░██──██░░████──██░░██──██░░██─
─██░░██──██░░██──██░░░░░░░░░░██──██░░░░░░░░░░██──██░░░░██──██░░░░██──██░░██──██░░██─
─██████──██████──██████████████──██████████████──████████──████████──██████──██████─
────────────────────────────────────────────────────────────────────────────────────
created by Sadeesha Coder 🕵
*/

const { download } = require('aptoide-scraper')
const { fetchJson } = require('../lib/functions')
const { cmd, commands } = require('../command')

// FETCH API URL
let baseUrl;
(async () => {
    let baseUrlGet = await fetchJson(`https://raw.githubusercontent.com/prabathLK/PUBLIC-URL-HOST-DB/main/public/url.json`)
    baseUrl = baseUrlGet.api
})();


const yourName = "*©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴇᴇꜱʜᴀ ᴄᴏᴅᴇʀ 🧑🏻‍💻*";



//fb downloader
cmd({
    pattern: "facebook",
    alias: ["fb"],
    desc: "download fb videos",
    category: "download",
    react: "⬇️",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q && !q.startsWith("https://")) return reply("give me fb url")
        //fetch data from api  
        let data = await fetchJson(`${baseUrl}/api/fdown?url=${q}`)
        reply("*Downloading...*")
        //send video (hd,sd)
        await conn.sendMessage(from, { video: { url: data.data.hd }, mimetype: "video/mp4", caption: `- HD\n\n ${yourName}` }, { quoted: mek })
        await conn.sendMessage(from, { video: { url: data.data.sd }, mimetype: "video/mp4", caption: `- SD \n\n ${yourName}` }, { quoted: mek })  
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})

//tiktok downloader
cmd({
    pattern: "tt",
    alias: ["tiktok"],
    desc: "download tt videos",
    category: "download",
    react: "⬇️",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q && !q.startsWith("https://")) return reply("give me tiktok url")
        //fetch data from api  
        let data = await fetchJson(`${baseUrl}/api/tiktokdl?url=${q}`)
        reply("*Downloading...*")
        //send video (wm,nwm)
        await conn.sendMessage(from, { video: { url: data.data.no_wm }, mimetype: "video/mp4", caption: `- NO-WATERMARK\n\n ${yourName}` }, { quoted: mek })
        await conn.sendMessage(from, { video: { url: data.data.wm }, mimetype: "video/mp4", caption: `- WITH-WATERMARK \n\n ${yourName}` }, { quoted: mek })  
        //send audio    
        await conn.sendMessage(from, { audio: { url: data.data.audio }, mimetype: "audio/mpeg" }, { quoted: mek })  
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})

//twitter dl (x)
cmd({
    pattern: "twitter",
    alias: ["twdl"],
    desc: "download tw videos",
    category: "download",
    react: "⬇️",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q && !q.startsWith("https://")) return reply("give me twitter url")
        //fetch data from api  
        let data = await fetchJson(`${baseUrl}/api/twitterdl?url=${q}`)
        reply("*Downloading...*")
        //send video (hd,sd)
        await conn.sendMessage(from, { video: { url: data.data.data.HD }, mimetype: "video/mp4", caption: `- HD\n\n ${yourName}` }, { quoted: mek })
        await conn.sendMessage(from, { video: { url: data.data.data.SD }, mimetype: "video/mp4", caption: `- SD \n\n ${yourName}` }, { quoted: mek })  
        //send audio    
        await conn.sendMessage(from, { audio: { url: data.data.data.audio }, mimetype: "audio/mpeg" }, { quoted: mek })  
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})

//gdrive(google drive) dl
cmd({
    pattern: "gdrive",
    alias: ["googledrive"],
    desc: "download gdrive files",
    category: "download",
    react: "⬇️",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q && !q.startsWith("https://")) return reply("give me gdrive url")
        //fetch data from api  
        let data = await fetchJson(`${baseUrl}/api/gdrivedl?url=${q}`)
        reply("*Downloading...*")
        await conn.sendMessage(from, { document: { url: data.data.download }, fileName: data.data.fileName, mimetype: data.data.mimeType, caption: `${data.data.fileName}\n\n${yourName}` }, { quoted: mek })                                                                                                                 
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})

//mediafire dl
cmd({
    pattern: "mediafire",
    alias: ["mfire"],
    desc: "download mfire files",
    category: "download",
    react: "⬇️",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q && !q.startsWith("https://")) return reply("give me mediafire url")
        react("❌")
        //fetch data from api  
        let data = await fetchJson(`${baseUrl}/api/mediafiredl?url=${q}`)
        reply("*Uploading...*")
        await conn.sendMessage(from, { document: { url: data.data.link_1 }, fileName: data.data.name, mimetype: data.data.file_type, caption: `${data.data.name}\n\n${yourName}` }, { quoted: mek })                                                                                                                 
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})

//＿＿＿＿＿＿＿＿＿＿＿＿＿＿APKDL＿＿＿＿＿＿＿＿＿

cmd({
    pattern: "apk",
    alias: ["app"],
    desc: "download fb videos",
    category: "download",
    react: "⬇️",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
if (!q) return reply("*give me a app name*\n\n_Ex:Whatsapp_")
        react ("❌")
let res = await download(q)  
let icon = res.icon
let paket = res.package
let size = res.size
let nama = res.name
let up = res.lastup
let file = res.dllink        
let desc = `*APK DOWNLOAD*
Nama : ${nama}
Update : ${up}
Size : ${size}
`    
await conn.sendMessage(from,{image:{url: res.icon},caption:desc},{quoted:mek})
await conn.sendMessage(from,{ document: { url: file }, fileName: nama + '.apk', mimetype: 'application/vnd.android.package-archive' }, { quoted: mek })

} catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})     
