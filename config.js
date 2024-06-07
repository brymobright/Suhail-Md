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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_58_06_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTkwLFxuICAgICAgICA2MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTk2LFxuICAgICAgICA5MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDc4LFxuICAgICAgICAxOSxcbiAgICAgICAgNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOSxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjEsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjE4LFxuICAgICAgICA1NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDU3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTg3LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0NixcbiAgICAgICAgNTUsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTMsXG4gICAgICAgIDEsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzksXG4gICAgICAgIDY4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTc3LFxuICAgICAgICA1MSxcbiAgICAgICAgMjIxLFxuICAgICAgICA3NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODksXG4gICAgICAgIDksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQyLFxuICAgICAgICA0MyxcbiAgICAgICAgMjM0LFxuICAgICAgICA1MixcbiAgICAgICAgMjUxLFxuICAgICAgICA0NyxcbiAgICAgICAgNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzksXG4gICAgICAgIDgwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDk4LFxuICAgICAgICAzOCxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxODAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTM3LFxuICAgICAgICA1NixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDg0LFxuICAgICAgICA4MCxcbiAgICAgICAgMzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjEzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDExLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjksXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDQxLFxuICAgICAgICAxODgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNSxcbiAgICAgICAgNDksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDExMSxcbiAgICAgICAgOCxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI1LFxuICAgICAgICA2LFxuICAgICAgICAxODEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTg1LFxuICAgICAgICA2MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDYzLFxuICAgICAgICA2OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTksXG4gICAgICAgIDE0LFxuICAgICAgICA4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDcwLFxuICAgICAgICA3OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMzQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE1LFxuICAgICAgICA2OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyLFxuICAgICAgICAxNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiejA0OVN5NnZDNVp6VVBiL3ZiRUZzL0ZjWXEyeE1xeXZreU90WDhWam5YZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQVUyUXBDa05RYU83b1lFS2NHTUZsd1wiLFxuICBcInBob25lSWRcIjogXCI4YWM2YzRlNy1iZDg5LTQ4YzMtOTlhNi05ZTVmMWE2NDc5Y2RcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYyLFxuICAgICAgNTcsXG4gICAgICAxNjcsXG4gICAgICA0NixcbiAgICAgIDIxNyxcbiAgICAgIDI2LFxuICAgICAgMTQsXG4gICAgICAxNjYsXG4gICAgICA0LFxuICAgICAgMTYwLFxuICAgICAgMjMxLFxuICAgICAgMTIzLFxuICAgICAgODIsXG4gICAgICAxMTgsXG4gICAgICAyMzAsXG4gICAgICAxNzgsXG4gICAgICAyNixcbiAgICAgIDIxMCxcbiAgICAgIDgzLFxuICAgICAgMTkzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYwLFxuICAgICAgMjMsXG4gICAgICAyMzksXG4gICAgICAyMDAsXG4gICAgICAyMzYsXG4gICAgICAxMzQsXG4gICAgICA1MyxcbiAgICAgIDg0LFxuICAgICAgMjQ2LFxuICAgICAgMTcxLFxuICAgICAgMTE1LFxuICAgICAgNzksXG4gICAgICAxNTQsXG4gICAgICAyNDcsXG4gICAgICAyNTEsXG4gICAgICAyMjksXG4gICAgICA1MCxcbiAgICAgIDI0OCxcbiAgICAgIDEyLFxuICAgICAgMjIxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIllUN1RDQ1o4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDEzMDI5MTc3OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIxNTgzOTU3MTc1NTIzNToxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05xVXI4NEpFSStoanJNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiOTBxdEFqNk4vQ29Lemt1LzhFcnE2Q2ZJZWJBbVREM1d4dXJIUmdNZTdTST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJqQnhrNnhSVXF3dE5sVUNkYXpOTjhJRkJ0TllZTlFFL3BWeWlwUjJkbjh3cVl3VTRYWms3bFVTdGJXN3l4U3FncmlyT0drcUZKYWR2UUxvNDhsdE9qZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJROFpnUUV3MWJObFBaWDVFNDJjRERYYTFuWXBMdTBieTdxYXRZdXBkUEFUUVlhQjFpMmZkRU14SzFadkhBL2RnTE9zZXdNWFVlSDFzWGJIVTE0eUFoZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDEzMDI5MTc3OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAzNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTc4MDExMDhcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
