const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347013029177";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_38_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA5MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMyxcbiAgICAgICAgMjAzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTg5LFxuICAgICAgICA3MyxcbiAgICAgICAgODgsXG4gICAgICAgIDU1LFxuICAgICAgICA4OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDY2LFxuICAgICAgICAxODEsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTIsXG4gICAgICAgIDc0LFxuICAgICAgICAxMixcbiAgICAgICAgNjIsXG4gICAgICAgIDEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDMzLFxuICAgICAgICAxODQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDMxLFxuICAgICAgICA3MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTg5LFxuICAgICAgICA5MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDk1LFxuICAgICAgICA4NixcbiAgICAgICAgOSxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTM2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjksXG4gICAgICAgIDI1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDksXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzksXG4gICAgICAgIDgxLFxuICAgICAgICAxODEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQzLFxuICAgICAgICA2MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgODEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODMsXG4gICAgICAgIDUzLFxuICAgICAgICA5MixcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTE4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTA2LFxuICAgICAgICA0OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDksXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0LFxuICAgICAgICAyNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTkxLFxuICAgICAgICA4OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDQ5LFxuICAgICAgICA0MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQ2LFxuICAgICAgICA1NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMixcbiAgICAgICAgMTk3LFxuICAgICAgICA0MixcbiAgICAgICAgMTY0LFxuICAgICAgICA0NCxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDY2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDkzLFxuICAgICAgICAyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzEsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDksXG4gICAgICAgIDAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjE4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4LFxuICAgICAgICA0NixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDksXG4gICAgICAgIDUxLFxuICAgICAgICA3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDg1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIrYm9xS1oydWl3UjRUNmhyU0N5Zmw0dHdSWjEzYThONVdqTW10WTFVL2tBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJZTk01VUdfdVJEU3RmdkVucktQSXpRXCIsXG4gIFwicGhvbmVJZFwiOiBcImU0MWUwNGJhLWRjOWMtNDQxYi04ZDdlLTZhOTg4YmUyYmNhYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4OCxcbiAgICAgIDcwLFxuICAgICAgMTMxLFxuICAgICAgMTgsXG4gICAgICA2MixcbiAgICAgIDk1LFxuICAgICAgMTkxLFxuICAgICAgNzAsXG4gICAgICAxMjQsXG4gICAgICAxMzIsXG4gICAgICAxMzgsXG4gICAgICAyNDgsXG4gICAgICAyNixcbiAgICAgIDEzLFxuICAgICAgMTUwLFxuICAgICAgMTQxLFxuICAgICAgOTMsXG4gICAgICAxNDYsXG4gICAgICAxODUsXG4gICAgICA0N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTUsXG4gICAgICAyLFxuICAgICAgODcsXG4gICAgICAzNCxcbiAgICAgIDQyLFxuICAgICAgMjMzLFxuICAgICAgMjUzLFxuICAgICAgOTEsXG4gICAgICAyNTQsXG4gICAgICAyNDgsXG4gICAgICAyMzksXG4gICAgICAxOTYsXG4gICAgICAyMzQsXG4gICAgICAxNjcsXG4gICAgICAyLFxuICAgICAgMjE1LFxuICAgICAgMTE3LFxuICAgICAgNzQsXG4gICAgICAyNyxcbiAgICAgIDE1NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJMWVY3Q1hFR1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzAxMzAyOTE3Nzo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMTU4Mzk1NzE3NTUyMzU6NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNdnVrd2dRNFBYQnRBWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInZWZWE3V3JQNEpIQ2FuTThvYnpIUXFXeWRCSk83VWxpTHl5QWFuK2wrMTQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUU1Dbit6MWNmYkVTL3ZEdlJ0bk00UVhVVnViZHF5UUVncFNCdDFyaUZ0aW5hbU9EaSs5MXNxclpPcTlNelVFUVlLR2tLTktKS2dHaGZMcG9yRHNDRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibTR5V1lLRTY2Y1lBa3BXT0trWm1qbkRtTlMxU1pGK084aVRIUmtsNUVCQkRtNG9sVC9XbzJYdW5KSjZEZlA2SSsyV3drMXRpUEduNmcwK080VFdRRGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzAxMzAyOTE3Nzo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDk0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA3NDQ2NzQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNZGVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1kZS5qc29uIjogIntcImtleURhdGFcIjpcIjlMTFF3NEZwTnRvamdnZHM1ZERUTnFRdGNTUkRpL2RhMXVZSEUyS2tldk09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTcxMDI2NjcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDc0NDY4MDI2OVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
