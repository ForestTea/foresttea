{
  "name": "MusicChannel",
  "temp": "musicstart",
  "event-type": "On Audio Start",
  "_id": "IQifK",
  "actions": [
    {
      "info": "1",
      "find": "🎶music_room",
      "storage": "1",
      "varName": "music_room",
      "name": "Find Channel"
    },
    {
      "channel": "3",
      "varName": "music_room",
      "info": "1",
      "storage": "1",
      "varName2": "music_channel_id",
      "name": "Store Channel Info"
    },
    {
      "server": "0",
      "info": "1",
      "storage": "1",
      "varName": "playingnow",
      "varName2": "",
      "name": "Store Audio Info"
    },
    {
      "server": "0",
      "info": "5",
      "storage": "1",
      "varName": "quuuu",
      "varName2": "",
      "name": "Store Audio Info"
    },
    {
      "server": "0",
      "info": "4",
      "storage": "1",
      "varName": "que_next",
      "varName2": "",
      "name": "Store Audio Info"
    },
    {
      "time": "1",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "storage": "1",
      "varName": "que_next",
      "comparison": "0",
      "value": "2",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "4",
      "iffalseVal": "why_not",
      "name": "Check Variable"
    },
    {
      "server": "0",
      "info": "15",
      "storage": "1",
      "varName": "thumbnail",
      "varName2": "",
      "name": "Store Audio Info"
    },
    {
      "server": "0",
      "info": "13",
      "storage": "1",
      "varName": "title",
      "varName2": "",
      "name": "Store Audio Info"
    },
    {
      "server": "0",
      "info": "9",
      "storage": "1",
      "varName": "songurl",
      "varName2": "",
      "name": "Store Audio Info"
    },
    {
      "server": "0",
      "info": "14",
      "storage": "1",
      "varName": "duration",
      "varName2": "",
      "name": "Store Audio Info"
    },
    {
      "server": "0",
      "info": "11",
      "storage": "1",
      "varName": "req",
      "varName2": "",
      "name": "Store Audio Info"
    },
    {
      "server": "0",
      "info": "12",
      "storage": "1",
      "varName": "next_title",
      "varName2": "",
      "name": "Store Audio Info"
    },
    {
      "server": "0",
      "info": "4",
      "storage": "1",
      "varName": "next_url",
      "varName2": "",
      "name": "Store Audio Info"
    },
    {
      "server": "0",
      "info": "10",
      "storage": "1",
      "varName": "next_requester",
      "varName2": "",
      "name": "Store Audio Info"
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
      "title": "𝗠𝘂𝘀𝗶𝗰 𝗣𝗹𝗮𝘆𝗲𝗿",
      "author": "",
      "color": "RANDOM",
      "url": "",
      "authorIcon": "",
      "authorUrl": "",
      "imageUrl": "",
      "thumbUrl": "${tempVars(\"thumbnail\")}",
      "timestamp": "false",
      "debug": "true",
      "text": "",
      "year": "",
      "month": "",
      "day": "",
      "hour": "",
      "minute": "",
      "second": "",
      "storage": "1",
      "varName": "main_music_msg",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "main_music_msg",
      "message": "[${tempVars(\"title\")}](${tempVars(\"songurl\")})\n\n𝗥𝗲𝗾𝘂𝗲𝘀𝘁𝗲𝗿: ${tempVars(\"req\")}\n𝗤𝘂𝗲𝘂𝗲: ${tempVars(\"quuuu\")}\n𝗗𝘂𝗿𝗮𝘁𝗶𝗼𝗻: ${tempVars(\"duration\")}\n\n𝗡𝗲𝘅𝘁 𝘀𝗼𝗻𝗴 𝗶𝘀:\n[${tempVars(\"next_title\")}](${tempVars(\"next_url\")})\n𝗥𝗲𝗾𝘂𝗲𝘀𝘁𝗲𝗿: ${tempVars(\"next_requester\")}\n\n${tempVars(\"stop_button\")} - Stop the music and clear the queue.\n${tempVars(\"skip_button\")} - Skip the current music.",
      "name": "Set Embed Description"
    },
    {
      "code": "serverVars(\"yt_second_msg\").edit({ embed: tempVars(\"main_music_msg\") });",
      "behavior": "0",
      "interpretation": "1",
      "storage": "0",
      "varName": "",
      "VTypeSelect": "0",
      "CVTypeValue": "",
      "name": "Run Script"
    },
    {
      "time": "3",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "storage": "2",
      "varName": "yt_second_msg",
      "emoji": "1",
      "varName2": "",
      "varName3": "stop_button",
      "name": "Add Reaction"
    },
    {
      "storage": "2",
      "varName": "yt_second_msg",
      "emoji": "1",
      "varName2": "",
      "varName3": "skip_button",
      "name": "Add Reaction"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "anchor_id": "why_not",
      "color": "#00ff00",
      "description": "There's no queue.",
      "name": "Create Anchor"
    },
    {
      "server": "0",
      "info": "15",
      "storage": "1",
      "varName": "thumbnail",
      "varName2": "",
      "name": "Store Audio Info"
    },
    {
      "server": "0",
      "info": "13",
      "storage": "1",
      "varName": "title",
      "varName2": "",
      "name": "Store Audio Info"
    },
    {
      "server": "0",
      "info": "9",
      "storage": "1",
      "varName": "songurl",
      "varName2": "",
      "name": "Store Audio Info"
    },
    {
      "server": "0",
      "info": "14",
      "storage": "1",
      "varName": "duration",
      "varName2": "",
      "name": "Store Audio Info"
    },
    {
      "server": "0",
      "info": "11",
      "storage": "1",
      "varName": "req",
      "varName2": "",
      "name": "Store Audio Info"
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
      "title": "𝗠𝘂𝘀𝗶𝗰 𝗣𝗹𝗮𝘆𝗲𝗿",
      "author": "",
      "color": "RANDOM",
      "url": "",
      "authorIcon": "",
      "authorUrl": "",
      "imageUrl": "",
      "thumbUrl": "${tempVars(\"thumbnail\")}",
      "timestamp": "false",
      "debug": "true",
      "text": "",
      "year": "",
      "month": "",
      "day": "",
      "hour": "",
      "minute": "",
      "second": "",
      "storage": "1",
      "varName": "no_queue_msg_2",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "no_queue_msg_2",
      "message": "[${tempVars(\"title\")}](${tempVars(\"songurl\")})\n\n𝗥𝗲𝗾𝘂𝗲𝘀𝘁𝗲𝗿: ${tempVars(\"req\")}\n𝗡𝗼 𝗺𝗼𝗿𝗲 𝘀𝗼𝗻𝗴 𝗶𝗻 𝘁𝗵𝗲 𝗾𝘂𝗲𝘂𝗲.\n𝗗𝘂𝗿𝗮𝘁𝗶𝗼𝗻: ${tempVars(\"duration\")}\n\n${tempVars(\"stop_button\")} - Stop the music and clear the queue.\n${tempVars(\"skip_button\")} - Skip the current music.",
      "name": "Set Embed Description"
    },
    {
      "code": "serverVars(\"yt_second_msg\").edit({ embed: tempVars(\"no_queue_msg_2\") });",
      "behavior": "0",
      "interpretation": "1",
      "storage": "0",
      "varName": "",
      "VTypeSelect": "0",
      "CVTypeValue": "",
      "name": "Run Script"
    },
    {
      "time": "3",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "storage": "2",
      "varName": "yt_second_msg",
      "emoji": "1",
      "varName2": "",
      "varName3": "stop_button",
      "name": "Add Reaction"
    },
    {
      "storage": "2",
      "varName": "yt_second_msg",
      "emoji": "1",
      "varName2": "",
      "varName3": "skip_button",
      "name": "Add Reaction"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "name": "End Action Sequence"
    }
  ]
}
