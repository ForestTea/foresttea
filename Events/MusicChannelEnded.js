
{
  "name": "MusicChannelEnded",
  "temp": "audioended",
  "event-type": "On Audio End",
  "_id": "hxMFw",
  "actions": [
    {
      "info": "1",
      "find": "🎶music_room",
      "storage": "1",
      "varName": "music_room",
      "name": "Find Channel"
    },
    {
      "info": "1",
      "find": "bot_commands",
      "storage": "1",
      "varName": "bot_room",
      "name": "Find Channel"
    },
    {
      "info": "0",
      "find": "924738164097159228",
      "storage": "1",
      "varName": "stop_button",
      "name": "Find Custom Emoji"
    },
    {
      "info": "0",
      "find": "924738924868415548",
      "storage": "1",
      "varName": "skip_button",
      "name": "Find Custom Emoji"
    },
    {
      "channel": "3",
      "varName": "bot_room",
      "info": "0",
      "storage": "1",
      "varName2": "bot_object",
      "name": "Store Channel Info"
    },
    {
      "server": "0",
      "info": "1",
      "storage": "1",
      "varName": "playing",
      "varName2": "",
      "name": "Store Audio Info"
    },
    {
      "storage": "1",
      "varName": "playing",
      "conversion": "2",
      "storage2": "1",
      "varName2": "string",
      "name": "Convert Variable"
    },
    {
      "storage": "1",
      "varName": "string",
      "comparison": "1",
      "value": "\"true\"",
      "iftrue": "1",
      "iftrueVal": "",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "time": "3",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "title": "𝗠𝘂𝘀𝗶𝗰 𝗣𝗹𝗮𝘆𝗲𝗿",
      "author": "",
      "color": "RANDOM",
      "url": "",
      "authorIcon": "",
      "authorUrl": "",
      "imageUrl": "",
      "thumbUrl": "https://www.mysafetysign.com/img/lg/I/no-loud-music-iso-sign-is-1213.png",
      "timestamp": "false",
      "debug": "false",
      "text": "",
      "year": "",
      "month": "",
      "day": "",
      "hour": "",
      "minute": "",
      "second": "",
      "storage": "1",
      "varName": "msg",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "msg",
      "message": "𝗖𝘂𝗿𝗿𝗲𝗻𝘁𝗹𝘆 𝗻𝗼 𝗼𝗻𝗲 𝗹𝗶𝘀𝘁𝗲𝗻𝗶𝗻𝗴 𝘁𝗼 𝘁𝗵𝗶𝘀 𝗯𝗼𝘁.\n\n*If you want to start a song/music, then just type something in this chat.\n\n${tempVars(\"stop_button\")} - Stop the music and clear the queue.\n${tempVars(\"skip_button\")} - Skip the current music.",
      "name": "Set Embed Description"
    },
    {
      "code": "serverVars(\"yt_second_msg\").edit({ embed: tempVars(\"msg\") });",
      "behavior": "0",
      "interpretation": "1",
      "storage": "0",
      "varName": "",
      "VTypeSelect": "0",
      "CVTypeValue": "",
      "name": "Run Script"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "name": "End Action Sequence"
    }
  ]
}
