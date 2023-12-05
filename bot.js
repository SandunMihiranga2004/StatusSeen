require("dotenv").config();  
require("./config");

  //import fetch from "node-fetch"; 
  const moment = require("moment-timezone"); 
  const axios = require("axios"); 
  const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia,  areJidsSameUser, getContentType, downloadMediaMessage } = require("@adiwajshing/baileys");  
  const fs = require("fs");  
  const util = require("util");  
  const chalk = require("chalk");  
  const ytdl = require("@distube/ytdl-core");
  const yts = require("youtube-yts");
  const googleTTS = require("google-tts-api");
  const Replicate = require("replicate")
  const { Configuration, OpenAIApi } = require("openai");  
  const { DiscussServiceClient } = require("@google-ai/generativelanguage"); 
  const { GoogleAuth } = require("google-auth-library"); 
  const os = require('os');
  const { 
     cpus, 
     totalmem, 
     freemem 
 } = require("os");
  const osu = require("node-os-utils");
  const fg = require('api-dylux'); 
  const { pipeline } = require('stream'); 
  const { promisify } = require('util'); 
  const { 
     sizeFormatter 
 } = require("human-readable");
  const streamPipeline = promisify(pipeline);
  var videotime = 60000 // 1000 min 
  var dlsize = 1000 // 1000mb
  
  module.exports = client = async (client, m, chatUpdate, store) => {  
    try {  
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype === 'messageContextInfo') ? (m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = /^[\\/!#.]/gi.test(body) ? body.match(/^[\\/!#.]/gi) : "/";  

  
//=================================================//
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()//If you want a single prefix, you replace it with this = const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await client.decodeJid(client.user.id)
const isOnr = mek.key.fromMe;
 

//const isCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const text = q = args.join(" ")
const { type, quotedMsg, mentioned, now, fromMe } = m
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = mek.key.remoteJid
const content = JSON.stringify(m.message)
const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
const Input = mentionByTag[0] ? mentionByTag[0] : q ? numberQuery : false
const qtod = m.quoted? "true":"false"
const owner = ["919938770375"];
let pendaftar = JSON.parse(fs.readFileSync('./database/user.json'))
let banUser = JSON.parse(fs.readFileSync('./database/banChat.json'));

const isUser = pendaftar.includes(m.sender)
const isBan = banUser.includes(m.sender)
let voicereply = JSON.parse(fs.readFileSync('./media/audio.json'));
const more = String.fromCharCode(8206) 
const readMore = more.repeat(4001)

const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]


const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
const usernya = mentionByReply ? mentionByReply : mentionByTag[0]
const isEval = body.startsWith('=>')
 
//=================================================//}  
//  Bot Prosess Time
const uptime = process.uptime();
const day = Math.floor(uptime / (24 * 3600)); // Calculate days
const hours = Math.floor((uptime % (24 * 3600)) / 3600); // Calculate hours
const minutes = Math.floor((uptime % 3600) / 60); // Calculate minutes
const seconds = Math.floor(uptime % 60); // Calculate seconds

//Uptime
  const uptimeMessage = `*I am alive now since ${day}d ${hours}h ${minutes}m ${seconds}s*`;
  const runMessage = `*☀️ ${day} Day*\n *🕐 ${hours} Hour*\n *⏰ ${minutes} Minutes*\n *⏱️ ${seconds} Seconds*\n`;
  
let format = sizeFormatter({ 
     std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC' 
     decimalPlaces: 2, 
     keepTrailingZeroes: false, 
     render: (literal, symbol) => `${literal} ${symbol}B`, 
 })
 const pingSt = new Date();
 
 //System info
 async function getIPInfo() {
  try {
    const response = await axios.get('https://api.myip.com');
    const data = response.data;
    
    let ip = data.ip || 'ɴᴏᴛ ᴅᴇᴛᴇᴄᴛ';
    let cr = data.country || 'ɴᴏᴛ ᴅᴇᴛᴇᴄᴛ';
    let cc = data.cc || 'ɴᴏᴛ ᴅᴇᴛᴇᴄᴛ';

    return { ip, cr, cc };
  } catch (error) {
    console.error('Error:', error);
    return { ip: 'ɴᴏᴛ ᴅᴇᴛᴇᴄᴛ', cr: 'ɴᴏᴛ ᴅᴇᴛᴇᴄᴛ', cc: 'ɴᴏᴛ ᴅᴇᴛᴇᴄᴛ' };
  }
}

async function mainSys() {

  let NotDetect = 'Not Detect';
  let cpux = osu.cpu;
  let cpuCore = cpux.count();
  let drive = osu.drive;
  let mem = osu.mem;
  let netstat = osu.netstat;
  let HostN = osu.os.hostname();
  let OS = osu.os.platform();
  let ipx = osu.os.ip();

   // const chats = Object.entries(client.chats).filter(([id, data]) => id && data.isChats) 
   //  const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) //groups.filter(v => !v.read_only) 
     const used = process.memoryUsage() 
     const _cpus = cpus().map(cpu => { 
         cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0) 
         return cpu 
     }) 
     const cpu = _cpus.reduce((last, cpu, _, { 
         length 
     }) => { 
         last.total += cpu.total 
         last.speed += cpu.speed / length 
         last.times.user += cpu.times.user 
         last.times.nice += cpu.times.nice 
         last.times.sys += cpu.times.sys 
         last.times.idle += cpu.times.idle 
         last.times.irq += cpu.times.irq 
         return last 
     }, { 
         speed: 0, 
         total: 0, 
         times: { 
             user: 0, 
             nice: 0, 
             sys: 0, 
             idle: 0, 
             irq: 0 
         } 
     })



let cpuPer 
     let p1 = cpux.usage().then(cpuPercentage => { 
         cpuPer = cpuPercentage 
     }).catch(() => { 
         cpuPer = NotDetect 
     }) 
     let driveTotal, driveUsed, drivePer 
     let p2 = drive.info().then(info => { 
         driveTotal = (info.totalGb + ' GB'), 
             driveUsed = info.usedGb, 
             drivePer = (info.usedPercentage + '%') 
     }).catch(() => { 
         driveTotal = NotDetect, 
             driveUsed = NotDetect, 
             drivePer = NotDetect 
     }) 
     let ramTotal, ramUsed 
     let p3 = mem.info().then(info => { 
         ramTotal = info.totalMemMb, 
             ramUsed = info.usedMemMb 
     }).catch(() => { 
         ramTotal = NotDetect, 
             ramUsed = NotDetect 
     }) 
     let netsIn, netsOut 
     let p4 = netstat.inOut().then(info => { 
         netsIn = (info.total.inputMb + ' MB'), 
             netsOut = (info.total.outputMb + ' MB') 
     }).catch(() => { 
         netsIn = NotDetect, 
             netsOut = NotDetect 
     }) 
     await Promise.all([p1, p2, p3, p4]) 
     let _ramTotal = (ramTotal + ' MB') 

  let d = new Date(new Date() + 3600000);
  let locale = 'id';
  let weeks = d.toLocaleDateString(locale, {
    weekday: 'long',
  });
  let dates = d.toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  let times = d.toLocaleTimeString(locale, {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });

  // Call the getIPInfo function to retrieve IP, Country, and Country Code
  const { ip, cr, cc } = await getIPInfo();
const reactionMessage = {
            react: {
                text: "🕐",
                key: m.key
            }
        }
        await client.sendMessage(m.chat, reactionMessage);
        const successReactionMessage = {
            react: {
                text: "💻",
                key: m.key
            }
        }
        await client.sendMessage(m.chat, successReactionMessage); 
 
 m.reply(`
  - *ᴘ ɪ ɴ ɢ* - 
  ${new Date() - pingSt} ms 
  
  - *ʀ ᴜ ɴ ᴛ ɪ ᴍ ᴇ* - 
  ${runMessage}
  
  - *s ᴇ ʀ ᴠ ᴇ ʀ* - 
  *🛑 Rᴀᴍ:* ${ramUsed} / ${_ramTotal}(${/[0-9.+/]/g.test(ramUsed) &&  /[0-9.+/]/g.test(ramTotal) ? Math.round(100 * (ramUsed / ramTotal)) + '%' : NotDetect}) 
  *🔵 FʀᴇᴇRᴀᴍ:* ${format(freemem())}
 
  *🔭 ᴘʟᴀᴛғᴏʀᴍ:* ${os.platform()} 
  *🧿 sᴇʀᴠᴇʀ:* ${os.hostname()} 
  *💻 ᴏs:* ${OS} 
  *📍 ɪᴘ:* ${ip} 
  *🌎 ᴄᴏᴜɴᴛʀʏ:* ${cr} 
  *💬 ᴄᴏᴜɴᴛʀʏ ᴄᴏᴅᴇ:* ${cc} 

  *🔮 ᴄᴘᴜ ᴄᴏʀᴇ:* ${cpuCore} Core 
  *🎛️ ᴄᴘᴜ:* ${cpuPer}% 
  *⏰ ᴛɪᴍᴇ sᴇʀᴠᴇʀ:* ${times} 
   
    - *ᴏ ᴛ ʜ ᴇ ʀ* - 
  *📅 Wᴇᴇᴋꜱ:* ${weeks} 
  *📆 Dᴀᴛᴇꜱ:* ${dates} 
  *🔁 NᴇᴛꜱIɴ:* ${netsIn} 
  *🔁 NᴇᴛꜱOᴜᴛ:* ${netsOut} 
  *💿 DʀɪᴠᴇTᴏᴛᴀʟ:* ${driveTotal} 
  *💿 DʀɪᴠᴇUꜱᴇᴅ:* ${driveUsed} 
  *⚙️ DʀɪᴠᴇPᴇʀ:* ${drivePer} 
 
  *乂 ɴᴏᴅᴇJS ᴍᴇᴍᴏʀʏ ᴜsᴀɢᴇ* 
   ${'```' + Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${format(used[key])}`).join('\n') + '```' }
  `);
}



           //TIME Wisher 
 const xtime = moment.tz('Asia/Colombo').format('HH:mm:ss') 
 const xdate = moment.tz('Asia/Colombo').format('DD/MM/YYYY') 
 const time2 = moment().tz('Asia/Colombo').format('HH:mm:ss')   
   if(time2 < "23:59:00"){ 
 var pushwish = `Good Night 🌌` 
  } 
  if(time2 < "19:00:00"){ 
 var pushwish = `Good Evening 🌃` 
  } 
  if(time2 < "18:00:00"){ 
 var pushwish = `Good Evening 🌃` 
  } 
  if(time2 < "15:00:00"){ 
 var pushwish = `Good Afternoon 🌅` 
  } 
  if(time2 < "11:00:00"){ 
 var pushwish = `Good Morning 🌄` 
  } 
  if(time2 < "05:00:00"){ 
 var pushwish = `Good Morning 🌄` 
  }  
    
  

//const sendMsg = await sock.sendMessage(id, reactionMessage)
    //  const from = m.chat;  
      const reply = m.reply;  
      //const sender = m.sender;  
     // const mek = chatUpdate.messages[0];  
  
      const color = (text, color) => {  
        return !color ? chalk.green(text) : chalk.keyword(color)(text);  
      };  
  
function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

async function sendPooll(jid, text, list) {
client.relayMessage(jid, {
"pollCreationMessage": {
"name": text,
"options": list.map(v => { return { optionName: v } }),
"selectableOptionsCount": list.length
}
}, {})
}


async function doReact(emoji) {
      let reactm = {
        react: {
          text: emoji,
          key: m.key,
        },
      };
      await client.sendMessage(from, reactm);
    }

// Function to validate language code
function isValidLanguageCode(code) {
    return (code);
}

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

async function fetchJson(url, options) {
    try {
        options ? options : {};
        const res = await axios({
            method: 'GET',
            url: url,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
            },
            ...options
        });
        return res.data;
    } catch (err) {
        return err;
    }
}

async function loading () {
var goutamload = [
`ㅤʟᴏᴀᴅɪɴɢ
《 █▒▒▒▒▒▒▒▒▒▒▒》10%`,
`ㅤʟᴏᴀᴅɪɴɢ
《 X-DL BOT HERE》100%`,
"ʟᴏᴀᴅɪɴɢ ᴄᴏᴍᴘʟᴇᴛᴇ"
]
let { key } = await client.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'}, {quoted: m})//Pengalih isu

for (let i = 0; i < goutamload.length; i++) {
//await delay(10)

    await client.relayMessage(m.chat, {
      protocolMessage: {
        key: key,
        type: 14,
        editedMessage: {
          conversation: goutamload[i]
        }
      }
    }, {});
}}  



async function typewriterEffect(text, key) {
// let { key } = await client.sendMessage(from, {text: 'Thinking...'}, {quoted: m})

  for (let i = 0; i < text.length; i++) {
    const noobText = text.slice(0, i + 1);
    await client.relayMessage(m.chat, {
      protocolMessage: {
        key: key,
        type: 14,
        editedMessage: {
          conversation: noobText
        }
      }
    }, {});
 //  await delay(100); // Adjust the delay time (in milliseconds) as needed
  }
}



/*
async function typewriterEffect(from, m, text) {
  let { key } = await client.sendMessage(from, { text: 'Thinking...' }, { quoted: m });

  for (let i = 0; i < text.length; i++) {
    const noobText = text.slice(0, i + 1);
    await client.relayMessage(m.chat, {
      protocolMessage: {
        key: key,
        type: 14,
        editedMessage: {
          conversation: noobText
        }
      }
    }, {});
    //  await delay(100); // Adjust the delay time (in milliseconds) as needed
  }
}
*/

    if (isCmd && !isUser) {
      pendaftar.push(m.sender);
      fs.writeFileSync("./database/user.json", JSON.stringify(pendaftar));
    }
const totalUsers = pendaftar.length;

    if (global.autoRecord) {
      if (m.chat) {
       client.sendPresenceUpdate("recording", m.chat);
      }
    }

    if (global.autoTyping) {
      if (m.chat) {
        client.sendPresenceUpdate("composing", m.chat);
      }
    }
/*
    if (global.available) {
      if (m.chat) {
        client.sendPresenceUpdate("available", m.chat);
      }
    }
*/
    if (global.autoread) {
      if (command) {
     //   await A17.sendPresenceUpdate("composing", m.chat);
        client.readMessages([m.key]);
      }
    }

if (global.available) {
      client.sendPresenceUpdate("available", m.chat);
    } else {
      client.sendPresenceUpdate("unavailable", m.chat);
    }


 // Auto Voice Reply
 

 for (let voicemsg of voicereply){

      if (body == voicemsg){
        result = fs.readFileSync(`./media/Audio/${voicemsg}.mp3`)
        
        client.sendMessage(m.chat, { audio: result, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
        }
 
  }


  
if (!isCmd && !mek.key.fromMe) {
  if (text == 'Hi') {
 // await typewriterEffect(from, m, "How can i assist you to day ?")
  // Handle relayMessageResponse as needed
}
}
  
if (global.chatbot) {
if (!isCmd && !mek.key.fromMe && !m.isGroup){
if (isBan) return m.reply(replai.banned);

  try {
    const userInput = text; // Replace this with the actual user input
   console.log('Received message:', userInput);

    let thinkingMessage = await client.sendMessage(from, { text: 'Thinking...' }, { quoted: m });
    const { key } = thinkingMessage;

    const apiEndpoint = `https://matrix-api-service.up.railway.app/gpt?text=${encodeURIComponent(userInput)}`;
    let response = await axios.get(apiEndpoint);
    let responseData = response.data;

    if (responseData.result) {
      const result = responseData.result;
      await typewriterEffect(result, key);
const textToSpeak = result;
const speechURL = `https://matrix-api-service.up.railway.app/speech?text=${encodeURIComponent(textToSpeak)}`;

  await client.sendMessage(m.chat, {
        audio: {
            url: speechURL,
        },
        mimetype: 'audio/mp4',
        ptt: true,
        fileName: `${textToSpeak}.mp3`,
    }, {
        quoted: m,
    });
    } else {
      console.log('API returned an unexpected response:', responseData);
    }
  } catch (error) {
    console.error(error);
  }
 
  //  const botreply1 = await axios.get(`http://api.brainshop.ai/get?bid=177717&key=uooLJDuf8KeXO1fv&uid=[uid]&msg=[${text}]`)

    //jawab = `${botreply1.data.cnt}`
   // m.reply(jawab)
     
    }    
}
      // Group  
     const groupMetadata = m.isGroup ? await client.groupMetadata(m.chat).catch((e) => {}) : "";  
     const groupName = m.isGroup ? groupMetadata.subject : "";  
  
      // Push Message To Console  
      let argsLog = budy.length > 30 ? `${q.substring(0, 30)}...` : budy;  
  
      if (isCmd && !m.isGroup) {  
        console.log(chalk.black(chalk.bgWhite("[ LOGS ]")), color(argsLog, "turquoise"), chalk.magenta("From"), chalk.green(pushname), chalk.yellow(`[ ${m.sender.replace("@s.whatsapp.net", "")} ]`));  
      } else if (isCmd && m.isGroup) {  
        console.log(  
          chalk.black(chalk.bgWhite("[ LOGS ]")),  
          color(argsLog, "turquoise"),  
          chalk.magenta("From"),  
          chalk.green(pushname),  
          chalk.yellow(`[ ${m.sender.replace("@s.whatsapp.net", "")} ]`),  
          chalk.blueBright("IN"),  
          chalk.green(groupName)  
        );  
      }  
  
      if (isCmd) {  
        switch (command) {  
          case "help":  
          case "menu":
          case "xdl":
          case "saduwa":  
  if (isBan) return m.reply(replai.banned);	 	
await doReact("👀");

     let me = m.sender 


 await loading();;
  const helpmenu =` 
╭––『 *${global.BotName}* 』 
┆ Hi 👋  
╰–❖  *${pushname}* 
╭–––––––––––––––༓ 
┆✑  *${pushwish}* 😄 
╰–––––––––––––––༓ 
╭–– 『 *Bot Info* 』      
┆ *Bot Name* : *${global.BotName}*
┆ *Owner Name* : *${global.OwnerName}*
┆ *Prefix* :  *${prefix}*
┆ *Total Users* : *${totalUsers}*
┆ *Uptime* : *${hours}h ${minutes}m ${seconds}s*
┆ *Mode* : *Public*
╰–––––––––––––––༓ 
╭––『 *User Info* 』 
┆𝗡𝗮𝗺𝗲 : *${pushname}*
┆𝗡𝘂𝗺𝗯𝗲𝗿 : @${me.split('@')[0]} 
┆𝗣𝗿𝗲𝗺𝗶𝘂𝗺 : ✅ 
╰–––––––––––––––༓ 
╭––『 *Time Info* 』 
┆𝗧𝗶m 𝗲 : *${xtime}*
┆𝗗𝗮𝘁𝗲 : *${xdate}*
╰–––––––––––––––༓ 
╭––『 *Help* 』 
┆✑  Please Type The *.help
╰–––––––––––––––༓ﾠ 
${readMore}
╭––『 *ChatGPT* 』
┆❏.gpt Hi
╰–––––––––––––––༓ 
╭––『 *Owner*  』
┆❏.script 🅕
┆❏.settings 🅕
┆❏.ping 🅕 
┆❏.alive 🅕 
┆❏.setbio 🅕 
┆❏.setname 🅕 
╰–––––––––––––––༓ 
╭––『 *Sticker menu* 』 
┆❏.sticker🅕 
╰–––––––––––––––༓
╭––『 *Search menu* 』ﾠ 
┆❏.xnxxsh
┆❏.xvsh
┆❏.xnxx
╰–––––––––––––––༓ 
╭––『 *Downloader* 』 
┆❏.xnxxdl
┆❏.xvdl
┆❏.xnxx
╰–––––––––––––––༓
          `; 

client.sendMessage(m.chat, {
video:fs.readFileSync('./media/X-2.0_2.mp4'),
gifPlayback:true,
caption: helpmenu,
contextInfo: {
externalAdReply: {
title: `MatrixCoder`, 
body: 'Follow Me',
thumbnailUrl: "https://telegra.ph/file/acc0bd65f6a5e8a1ee0c6.jpg", //https://telegra.ph/file/acc0bd65f6a5e8a1ee0c6.jpg
sourceUrl: "https://github.com/azanazhar", 
mediaType: 1,
renderLargerThumbnail: true
}} 
},
 {quoted: m})
break;
case 'snap':
  let codeText = text;

  try {
    let response = await axios.post('https://carbonara.solopov.dev/api/cook', {
      code: codeText,
      backgroundColor: '#1F816D',
    }, {
      responseType: 'arraybuffer',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status !== 200) {
      throw new Error('Failed to generate the code image.');
    }

    //conn.sendFile(m.chat, response.data, 'code.png', 'Here is the code image:', m);
  client.sendMessage(m.chat, {
        image: {
          url: response.data,
        },
        caption: 'Here is the code image.',
      }, {
        quoted: m,
      });
  } catch (error) {
    console.error(error);
    m.reply('An error occurred while generating the code image.');
  }
break;

case 'settings':
case 'setting':
if (!isOnr) return m.reply(replai.botowner);  
m.reply(`
╭––『 *Bot Settings* 』ﾠ 
┆❏.autotyping 🅕 
┆❏.autorecord 🅕 
┆❏.auto-bio 🅕
┆❏.always-online 🅕
┆❏.autoread 🅕
┆❏.anti-call 🅕
╰–––––––––––––––༓ 
`)

break;

case 'chatbot':
case 'auto-ai':
 if (!isOnr) return m.reply(replai.botowner);
//client.sendMessage(from, { react: { text: '❤', key: m.key }});

if (text === 'on') { 
     global.chatbot = true;
      m.reply('ChatBot is now enabled.');
     }
     else if (text === 'off') {
     global.chatbot = false;
      m.reply('ChatBot is now disabled.'); 
     } else {
      m.reply('Usage: /chatbot on/off');
      
    }

  break;


case 'autotyping':
case 'auto-typing':
 if (!isOnr) return m.reply(replai.botowner);
//client.sendMessage(from, { react: { text: '❤', key: m.key }});

if (text === 'on') { 
     global.autoTyping = true;
      m.reply('auto-typing is now enabled.');
     }
     else if (text === 'off') {
     global.autoTyping = false;
      m.reply('auto-typing is now disabled.'); 
     } else {
      m.reply('Usage: /auto-typing on/off');
      
    }

  break;

case 'auto-bio':
case 'autobio':
 if (!isOnr) return m.reply(replai.botowner);
//client.sendMessage(from, { react: { text: '❤', key: m.key }});

if (text === 'on') { 
     global.autoBio = true;
      m.reply('auto-bio is now enabled.');
     }
     else if (text === 'off') {
     global.autoBio = false;
      m.reply('auto-bio is now disabled.'); 
     } else {
      m.reply('Usage: /auto-bio on/off');
      
    }

  break;
  

case 'anti-call':
case 'anticall':
 if (!isOnr) return m.reply(replai.botowner);
//client.sendMessage(from, { react: { text: '❤', key: m.key }});

if (text === 'on') { 
     global.antiCall = true;
      m.reply('Anti-Call is now enabled.');
     }
     else if (text === 'off') {
     global.antiCall = false;
      m.reply('Anti-Call is now disabled.'); 
     } else {
      m.reply('Usage: /anti-call on/off');
      
    }

  break;
case 'always-online':
case 'available':
 if (!isOnr) return m.reply(replai.botowner);
//client.sendMessage(from, { react: { text: '❤', key: m.key }});

if (text === 'on') { 
     global.available = true;
      m.reply('always-online is now enabled.');
     }
     else if (text === 'off') {
     global.available = false;
      m.reply('always-online is now disabled.'); 
     } else {
      m.reply('Usage: /always-online on/off');
      
    }

  break;

case 'autoread':
case 'auto-read':
 if (!isOnr) return m.reply(replai.botowner);
//client.sendMessage(from, { react: { text: '❤', key: m.key }});

if (text === 'on') { 
     global.autoread = true;
      m.reply('Auto Read is now enabled.');
     }
     else if (text === 'off') {
     global.autoread = false;
      m.reply('Auto Read is now disabled.'); 
     } else {
      m.reply('Usage: /auto-read on/off');
      
    }

  break;
  
  
case 'autorecord':
  case 'auto-recording':
 if (!isOnr) return m.reply(replai.botowner);
client.sendMessage(from, { react: { text: '❤', key: m.key }});

//  if (args.length === 1 && (args[0] === 'on' || args[0] === 'off')) {
    const status = text;
    if (status === 'on') {
      global.autoRecord = true;
      return m.reply(`Auto recording is now *enabled*.`);
    } else if (status === off) {
      global.autoRecord = false;
      return m.reply(`Auto recording is now *disabled*.`);
    }
   else {
    m.reply(`Usage: \`${prefix}autorecord [on/off]\``);
   
  }
  break;

case 'ban': {
  if (!isOnr) return m.reply(replai.botowner);
  if (m.quoted) {
    const senderId = m.quoted.sender;
    
    // Check if the sender's WhatsApp ID is already in the ban list
    if (banUser.includes(senderId)) {
      return m.reply('This user is already banned.');
    }
    
    // Add the sender's WhatsApp ID to the ban list
    banUser.push(senderId);
    
    // Save the updated ban list to the file
    fs.writeFileSync('./database/banChat.json', JSON.stringify(banUser));
    
    // Notify the user that they have been banned
    return m.reply('User Sucsessfully Banned.');
  } else {
    // If there's no valid reply, inform the user to use /ban as a reply to another message
    return m.reply('Please reply to a message with /ban to ban the user.');
  }
}
break;

case 'unban': {
  if (!isOnr) return m.reply(replai.botowner);
  if (m.quoted) {
    // Remove the sender's WhatsApp ID from the ban list
    const index = banUser.indexOf(m.quoted.sender);
    if (index !== -1) {
      banUser.splice(index, 1);
      // Save the updated ban list to the file
      fs.writeFileSync('./database/banChat.json', JSON.stringify(banUser));
      // Notify the user that they have been unbanned
      return m.reply('User Sucsessfully Unbanned');
    } else {
      // Notify the user that their WhatsApp ID was not found in the ban list
      return m.reply('Your WhatsApp ID was not found in the ban list.');
    }
  } else {
    // If there's no valid reply, inform the user to use /unban as a reply to another message
    return m.reply('Please reply to a message with /unban to unban user.');
  }
}
break;

case 'ping': {
  if (isBan) return m.reply(replai.banned);	 	
  const reactionMessage = {
    react: {
        text: "📍", // use an empty string to remove the reaction
        key: m.key
    }
}
await client.sendMessage(m.chat, reactionMessage)

 // await loading();;  
  const startTime = new Date();
  const pingMsg = await client.sendMessage(m.chat, { text: 'Pinging...' }, {quoted: m});

 await client.relayMessage(m.chat, {
      protocolMessage: {
        key: pingMsg.key,
        type: 14,
        editedMessage: {
          conversation: `*Respond Speed: ${new Date() - startTime} ms*`
        }
      }
    }, {});
  } 
break;

case 'runtime':
case 'alive': {
  if (isBan) return m.reply(replai.banned);	 	
  const reactionMessage = {
    react: {
        text: "🤨", // use an empty string to remove the reaction
        key: m.key
    }
}
await client.sendMessage(m.chat, reactionMessage)
await loading();;
  await m.reply(uptimeMessage);
}
break;

case "ai":
case "gpt":
  if (isBan) return m.reply(replai.banned);

  try {
    const userInput = text; // Replace this with the actual user input
    console.log('Received message:', userInput);

    let thinkingMessage = await client.sendMessage(from, { text: 'Thinking...' }, { quoted: m });
    const { key } = thinkingMessage;

    const apiEndpoint = `https://matrix-api-service.up.railway.app/gpt?text=${encodeURIComponent(userInput)}`;
    let response = await axios.get(apiEndpoint);
    let responseData = response.data;

    if (responseData.result) {
      const result = responseData.result;
      await typewriterEffect(result, key);
const textToSpeak = result;
const speechURL = `https://matrix-api-service.up.railway.app/speech?text=${encodeURIComponent(textToSpeak)}`;

  await client.sendMessage(m.chat, {
        audio: {
            url: speechURL,
        },
        mimetype: 'audio/mp4',
        ptt: true,
        fileName: `${textToSpeak}.mp3`,
    }, {
        quoted: m,
    });
    } else {
      console.log('API returned an unexpected response:', responseData);
    }
  } catch (error) {
    console.error(error);
  }

  break;


/*
case "ai": case "gpt":   
if (isBan) return m.reply(replai.banned);		

try {
  let thinkingMessage = await client.sendMessage(from, { text: 'Thinking...' }, { quoted: m });
  const { key } = thinkingMessage;

  const userInput = text; // Replace this with the actual user input
  const apiEndpoint = `https://matrix-api-service.up.railway.app/gpt?text=${encodeURIComponent(userInput)}`;

  let response = await axios.get(apiEndpoint);
  let responseData = response.data;

  if (responseData.status === true) {
    const result = responseData.result;
await typewriterEffect(result, key);

const textToSpeak = result;
const speechURL = `https://matrix-api-service.up.railway.app/speech?text=${encodeURIComponent(textToSpeak)}`;

  await client.sendMessage(m.chat, {
        audio: {
            url: speechURL,
        },
        mimetype: 'audio/mp4',
        ptt: true,
        fileName: `${textToSpeak}.mp3`,
    }, {
        quoted: m,
    });
  } else {
    console.log('API returned a non-successful status');
  }
} catch (error) {
  console.error(error);
}

      
 break; 
 */

case 'deleteall':
case 'delall':
case 'delete':
case 'del': 
     if (!isOnr) return m.reply(replai.botowner);
        if (!m.quoted) return reply('Please mention a message baka!');
        let { chat, id } = m.quoted;

        const key = {
            remoteJid: m.chat,
            id: m.quoted.id,
            participant: m.quoted.sender
        };

        await client.sendMessage(m.chat, { delete: key });
 //  } else {
   //   reply('You are not authorized to use this command.');
  //  }
    break;     
    
case 'promote': {
  if (isBan) return m.reply(replai.banned);	 	
    let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    if (!users) {
        return reply(`*Usage*\n${prefix + command} @tag`);
    }

    // Promote the user in the group
    await client.groupParticipantsUpdate(from, [users], "promote")
        .then((res) => {
            const response = {
                success: true,
                message: `User ${users} has been promoted to admin.`
            };
            reply(JSON.stringify(response)); // Convert the response to JSON string
        })
        .catch((err) => {
            console.error(err);
            const response = {
                success: false,
                message: "An error occurred while promoting the user."
            };
            reply(JSON.stringify(response)); // Convert the error response to JSON string
        })};
    break;    
case 'demote': {
  if (isBan) return m.reply(replai.banned);	 	
    try {
        // Check if it's a group chat
        // Extract the user to be demoted (from mention or quoted message)
        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

        if (!users) {
            return reply(`*Usage*\n${prefix + command} @tag`);
        }

        // Demote the user in the group
        await client.groupParticipantsUpdate(from, [users], "demote");

        reply(`User ${users} has been demoted.`);
    } catch (error) {
        console.error("Error demoting user:", error);
        reply("An error occurred while demoting the user.");
    }}
    break;    
case 'block': {
  
  try {
    // Check if there is no text and no quoted message
    if (!text && !m.quoted) return reply(`🚩 Mention or Reply chat target.`);

    let number = isNaN(text) ? (text.startsWith('+') ? text.replace(/[()+\s-]/g, '') : text.split`@`[1]) : text;

    // Check if 'number' is not a valid number
    if (isNaN(number)) return reply(`🚩 Invalid number.`);

    // Check if 'number' length is greater than 15
    if (number.length > 15) return reply(`🚩 Invalid format.`);

    let user;

    // Check if 'text' is provided
    if (text) {
      user = number + '@s.whatsapp.net';
    }
    // Check if 'm.quoted.sender' exists
    else if (m.quoted.sender) {
      user = m.quoted.sender;
    }
    // Check if 'm.mentionedJid' exists
    else if (m.mentionedJid) {
      user = number + '@s.whatsapp.net';
    }

    // Check if the user is trying to block the bot itself
    if (user == client.user.id.split(':')[0] + 's.whatsapp.net') return reply(`🚩 ??`);

    // Update the block status
    client.updateBlockStatus(user, 'block');
  } catch (error) {
    console.error("Error blocking user:", error);
    reply("An error occurred while blocking the user.");
  }}
  break;


case 'unblock': {
  try {
    // Check if there is no text and no quoted message
    if (!text && !m.quoted) return reply(`🚩 Mention or Reply chat target.`);

    let number = isNaN(text) ? (text.startsWith('+') ? text.replace(/[()+\s-]/g, '') : text.split`@`[1]) : text;

    // Check if 'number' is not a valid number
    if (isNaN(number)) return reply(`🚩 Invalid number.`);

    // Check if 'number' length is greater than 15
    if (number.length > 15) return reply(`🚩 Invalid format.`);

    let user;

    // Check if 'text' is provided
    if (text) {
      user = number + '@s.whatsapp.net';
    }
    // Check if 'm.quoted.sender' exists
    else if (m.quoted.sender) {
      user = m.quoted.sender;
    }
    // Check if 'm.mentionedJid' exists
    else if (m.mentionedJid) {
      user = number + '@s.whatsapp.net';
    }

    // Check if the user is trying to unblock the bot itself
    if (user == client.user.id.split(':')[0] + 's.whatsapp.net') return reply(`🚩 ??`);

    // Update the block status
    client.updateBlockStatus(user, 'unblock');
  } catch (error) {
    console.error("Error unblocking user:", error);
    reply("An error occurred while unblocking the user.");
  }}
  break;    


case 'private': {
   if (!isOnr) return m.reply(replai.botowner);
        client.sendMessage(from, { react: { text: "🔐" , key: m.key }})
        client.public = false
        reply('mode changed in to private. only admin can use me!')
        client.setStatus(`Mode : Self`)
        }
        break;

case 'public': {
   if (!isOnr) return m.reply(replai.botowner);
        client.sendMessage(from, { react: { text: "🔓" , key: m.key }})
        client.public = true
        reply('mode changed in to public. now all user user me!')
        client.setStatus(`Mode : Public`)
        }
        break;
case 'kick': {
    // Check if it's a group chat
    // Extract the user to be kicked (from mention or quoted message)
    let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    if (!users) {
        return reply(`*Usage*\n${prefix + command} @tag`);
    }

    // Kick the user from the group
    await client.groupParticipantsUpdate(from, [users], 'remove')
        .then((res) => {
            const response = {
                success: true,
                message: `User ${users} has been kicked from the group.`
            };
            reply(JSON.stringify(response)); // Convert the response to JSON string
        })
        .catch((err) => {
            console.error(err);
            const response = {
                success: false,
                message: "An error occurred while kicking the user."
            };
            reply(JSON.stringify(response)); // Convert the error response to JSON string
        });
}
    break;


case 'add': {
  // Check if it's a group chat

  // Extract the user to be added (from mention, quoted message, or provided text)
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

  if (!users) {
    return reply(`*Usage*\n${prefix + command} @tag`);
  }

  // Add the user to the group
  await client.groupParticipantsUpdate(from, [users], 'add')
    .then(() => {
      reply(`User ${users} has been added to the group.`);
    })
    .catch((err) => {
      console.error(err);
      reply('An error occurred while adding the user to the group.');
    });
}
  break;


case 'chat':
  if (isBan) return m.reply(replai.banned);	 	
            botreply = await axios.get(`http://api.brainshop.ai/get?bid=177717&key=uooLJDuf8KeXO1fv&uid=[uid]&msg=[${text}]`
          );
          txtChatbot = `${botreply.data.cnt}`;
          

            m.reply(txtChatbot);
break;            
            
            case "sc": case "script": case "scbot":  
            // m.reply("https://github.com/MatrixCoder0101/GSS-Botwa");  
    await loading();;;
             let api = 'https://api.github.com/repos/MatrixCoder0101/GSS-BETA'
  axios.get(api).then(function(response) {
    github = response.data;
    let txt = `                                                           *B O T  -  S C R I P T*\n\n` 
       txt += `◦  *Name* : *${github.name}*\n` 
       txt += `◦  *Visitor* : ${github.watchers_count}\n` 
       txt += `◦  *Size* : ${(github.size / 1024).toFixed(2)} MB\n` 
       txt += `◦  *Updated* : ${moment(github.updated_at).format('DD/MM/YY')}\n` 
       txt += `◦  *Url* : ${github.html_url}\n\n` 
       txt += `${github.forks_count} Forks · ${github.stargazers_count} Stars · ${github.open_issues_count} Issues\n\n` 
       txt +=               '*MatrixCoder0101*'
   client.relayMessage(m.chat,  { 
           requestPaymentMessage: { 
           currencyCodeIso4217: 'INR', 
           amount1000: "9999999999", 
           requestFrom: m.sender, 
           noteMessage: { 
           extendedTextMessage: { 
           text: txt, 
           contextInfo: { 
           externalAdReply: { 
           showAdAttribution: true
       }}}}}}, {}) 
    });
			
			break;
            
case "xnxxdl": {
	if (!text) return m.reply(`Enter Url`)
        if (!text.includes('xnxx.com')) return m.reply(`Enter an xnxx link`)
        const fg = require('api-dylux')
            let xn = await fg.xnxxdl(text)
client.sendMessage(m.chat, { caption: `  *XNXX DL*
        
✍ *Title:* ${xn.title}
⌛ *Duration:* ${xn.duration}
📽 *Visual Quality:* ${xn.quality}`, video: {url: xn.url_dl} }, { quoted: m })
}
break


case 'xnxxdh': {
	if (!text) return m.reply(`Enter Query`)
	const fg = require('api-dylux')
	let res = await fg.xnxxSearch(text)
            let ff = res.result.map((v, i) => `${i + 1}┃ *Title* : ${v.title}\n*Link:* ${v.link}\n`).join('\n') 
              if (res.status) m.reply(ff)
              }
              break
			
              
case 'xvsh': {
  if (!text) return m.reply(`Enter Query`);

  const axios = require('axios');

  const apiUrl = `https://raganork-network.vercel.app/api/xvideos/search?query=${encodeURIComponent(text)}`;

  try {
    const response = await axios.get(apiUrl);

    if (response.status === 200) {
      const results = response.data.result;
      if (results.length === 0) {
        m.reply('No results found.');
      } else {
        const formattedResults = results.map((result, index) => {
          return `${index + 1}┃ Title: ${result.title}\n*Link:* ${result.url}\n⌛ Duration: ${result.duration}`;
        }).join('\n\n');

        m.reply(formattedResults);
      }
    } else {
      m.reply('Error fetching results from the API.');
    }
  } catch (error) {
    console.error(error);
    m.reply('Error fetching results from the API.');
  }
} break;
            
case 'true':
case 'truecaller':

try {
  const installationId = 'a1i0Q--j71FxrF6-uYQJNpxOYZSWZ8iDA7PBYZFjTcprhANUBveyFev6u71dfVZf';
  const apiUrl = `https://matrix-api-service.up.railway.app/truecaller?phone=${encodeURIComponent(text)}&id=${installationId}`;

  let response = await axios.get(apiUrl);
  console.log(response);
  let json = response.data;

const { name, alternateName, addresses, email, countryDetails } = json;

let info = `╭––『 *Phone Detail* 』\n`;
info += `┆ ⚝ *Name:* ${name}\n`;

if (addresses && addresses.length > 0) {
  info += `┆ ⚝ *Address:* ${addresses[0].city}, ${addresses[0].countryCode}\n`;
  info += `┆ ⚝ *Time Zone:* ${addresses[0].timeZone}\n`;
  info += `┆ ⚝ *Pin Code* ${addresses[0].zipCode}\n`;
  info += `┆ ⚝ *Street* ${addresses[0].street}\n`;
}

info += `┆ ⚝ *Email:* ${email}\n`;
info += `╰–––––––––––––––༓\n`

if (countryDetails) {
  info += `╭––『 *countryDetails* 』\n`;
  info += `┆ ⚝ *Name:* ${countryDetails.name}\n`;
  info += `┆ ⚝ *Native:* ${countryDetails.native}\n`;
  info += `┆ ⚝ *Phone Code:* +${countryDetails.phone[0]}\n`;
  info += `┆ ⚝ *Continent:* ${countryDetails.continent}\n`;
  info += `┆ ⚝ *Capital:* ${countryDetails.capital}\n`;
  info += `┆ ⚝ *Currency:* ${countryDetails.currency.join(', ')}\n`;
  info += `┆ ⚝ *Languages:* ${countryDetails.languages.join(', ')}\n`;
  info += `┆ ⚝ *Flag:* ${countryDetails.flag}\n`;
  info += `╰–––––––––––––––༓`;
}


      await client.sendMessage(m.chat, {
        text: info,
      }, {
        quoted: m,
      });

} catch (error) {
  console.error(error);
}
break;
/*
case 'send':
case 'scam':
case 'fuck':
  if (isBan) return m.reply(replai.banned);

  const [recipient, numMessages, ...message] = args.join(' ').split('.');
  const formattedMessage = message.join('.').trim();

  for (let i = 0; i < parseInt(numMessages); i++) {
    client.sendMessage(`${recipient}@s.whatsapp.net`, {
      text: formattedMessage,
    });
  }
  break;
*/


          default: {  
            if (isCmd && budy.toLowerCase() != undefined) {  
              if (m.chat.endsWith("broadcast")) return;  
              if (m.isBaileys) return;  
              if (!budy.toLowerCase()) return;  
              if (argsLog || (isCmd && !m.isGroup)) {  
                // client.sendReadReceipt(m.chat, m.sender, [m.key.id])  
                console.log(chalk.black(chalk.bgRed("[ ERROR ]")), color("command", "turquoise"), color(`${prefix}${command}`, "turquoise"), color("tidak tersedia", "turquoise"));  
              } else if (argsLog || (isCmd && m.isGroup)) {  
                // client.sendReadReceipt(m.chat, m.sender, [m.key.id])  
                console.log(chalk.black(chalk.bgRed("[ ERROR ]")), color("command", "turquoise"), color(`${prefix}${command}`, "turquoise"), color("tidak tersedia", "turquoise"));  
              }  
            }  
          }  
        }  
     } 
    } catch (err) {  
      m.reply(util.format(err));  
    }  
  };  
  
  let file = require.resolve(__filename);  
  fs.watchFile(file, () => {  
    fs.unwatchFile(file);  
    console.log(chalk.redBright(`Update ${__filename}`));  
    delete require.cache[file];  
    require(file);  
  });
