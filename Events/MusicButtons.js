
{
  "name": "MusicButtons",
  "temp": "reaction",
  "event-type": "28",
  "_id": "gdjTb",
  "actions": [
    {
      "info": "0",
      "find": "923510613358051358",
      "storage": "1",
      "varName": "music_room_id",
      "name": "Find Channel"
    },
    {
      "info": "0",
      "find": "820704003134193674",
      "storage": "1",
      "varName": "secret_room_id",
      "name": "Find Voice Channel"
    },
    {
      "server": "0",
      "info": "5",
      "storage": "1",
      "varName": "lenght",
      "varName2": "",
      "name": "Store Audio Info"
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
      "varName2": "string_play",
      "name": "Convert Variable"
    },
    {
      "reaction": "1",
      "varName": "reaction",
      "info": "0",
      "storage": "1",
      "varName2": "message_object",
      "name": "Store Reaction Info"
    },
    {
      "reaction": "1",
      "varName": "reaction",
      "info": "7",
      "storage": "1",
      "varName2": "last_user",
      "name": "Store Reaction Info"
    },
    {
      "reaction": "1",
      "varName": "reaction",
      "member": "2",
      "varName2": "last_user",
      "name": "Remove Reaction"
    },
    {
      "member": "2",
      "varName": "last_user",
      "info": "0",
      "varName2": "",
      "iftrue": "1",
      "iftrueVal": "",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check If Member"
    },
    {
      "message": "1",
      "varName": "message_object",
      "info": "4",
      "storage": "1",
      "varName2": "message_channel",
      "name": "Store Message Info"
    },
    {
      "channel": "3",
      "varName": "message_channel",
      "info": "1",
      "storage": "1",
      "varName2": "msg_channel_id",
      "name": "Store Channel Info"
    },
    {
      "storage": "1",
      "varName": "music_room_id",
      "comparison": "1",
      "value": "tempVars(\"msg_channel_id\")",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "1",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "info": "0",
      "find": "824214643328286720",
      "storage": "1",
      "varName": "DanDan_Dj_Role",
      "name": "Find Role"
    },
    {
      "member": "2",
      "varName": "last_user",
      "role": "3",
      "varName2": "DanDan_Dj_Role",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "1",
      "iffalseVal": "",
      "name": "Check If Member has Role"
    },
    {
      "reaction": "1",
      "varName": "reaction",
      "info": "3",
      "storage": "1",
      "varName2": "emoji_names",
      "name": "Store Reaction Info"
    },
    {
      "reaction": "1",
      "varName": "reaction",
      "info": "4",
      "storage": "1",
      "varName2": "reaction_count",
      "name": "Store Reaction Info"
    },
    {
      "storage": "1",
      "varName": "reaction_count",
      "comparison": "13",
      "value": "2",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "1",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "emoji_names",
      "comparison": "1",
      "value": "\"stopsign\"",
      "iftrue": "4",
      "iftrueVal": "stop_button_anchor",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "emoji_names",
      "comparison": "1",
      "value": "\"skip_bt\"",
      "iftrue": "4",
      "iftrueVal": "skip_button_anchor",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "emoji_names",
      "comparison": "1",
      "value": "\"dice_bt\"",
      "iftrue": "4",
      "iftrueVal": "dice_button_anchor",
      "iffalse": "1",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "anchor_id": "stop_button_anchor",
      "color": "#ff0000",
      "description": "Want to stop the whole music bot.",
      "name": "Create Anchor"
    },
    {
      "member": "2",
      "varName": "last_user",
      "info": "4",
      "varName2": "",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "1",
      "iffalseVal": "",
      "name": "Check If Member"
    },
    {
      "reaction": "1",
      "varName": "reaction",
      "member": "2",
      "varName2": "last_user",
      "name": "Remove Reaction"
    },
    {
      "storage": "1",
      "varName": "string_play",
      "comparison": "1",
      "value": "\"true\"",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "1",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "channel": "5",
      "varName": "music_room_id",
      "message": "${tempVars(\"last_user\")} stopping the music bot...",
      "storage": "1",
      "varName2": "store_this_msg_too",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Send Message"
    },
    {
      "time": "5",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "action": "0",
      "name": "Control Audio"
    },
    {
      "name": "Clear Queue"
    },
    {
      "storage": "1",
      "varName": "store_this_msg_too",
      "reason": "",
      "name": "Delete Message"
    },
    {
      "time": "1",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "sourcetype": "0",
      "source": "IQifK",
      "source2": "",
      "type": "true",
      "name": "Call Command/Event"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "anchor_id": "pause_button_anchor",
      "color": "#ffff00",
      "description": "Temporaly want to stop the music.",
      "name": "Create Anchor"
    },
    {
      "reaction": "1",
      "varName": "reaction",
      "member": "2",
      "varName2": "last_user",
      "name": "Remove Reaction"
    },
    {
      "action": "1",
      "name": "Control Audio"
    },
    {
      "sourcetype": "0",
      "source": "IQifK",
      "source2": "",
      "type": "true",
      "name": "Call Command/Event"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "anchor_id": "dice_button_anchor",
      "color": "#00ff00",
      "description": "Start playing a random song.",
      "name": "Create Anchor"
    },
    {
      "member": "2",
      "varName": "last_user",
      "info": "4",
      "varName2": "",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "1",
      "iffalseVal": "",
      "name": "Check If Member"
    },
    {
      "reaction": "1",
      "varName": "reaction",
      "member": "2",
      "varName2": "last_user",
      "name": "Remove Reaction"
    },
    {
      "code": "var myArray = [\n\"https://www.youtube.com/watch?v=OGmkFHSkQr0\",\n\"https://www.youtube.com/watch?v=T3E9Wjbq44E\",\n\"https://www.youtube.com/watch?v=hT_nvWreIhg\",\n\"https://www.youtube.com/watch?v=_tNU6dpjIyM\",\n\"https://www.youtube.com/watch?v=bmcP-tp2GyQ\",\n\"https://www.youtube.com/watch?v=mk48xRzuNvA\",\n\"https://www.youtube.com/watch?v=j5-yKhDd64s\",\n\"https://www.youtube.com/watch?v=hHUbLv4ThOo\",\n\"https://www.youtube.com/watch?v=qaZ0oAh4evU\",\n\"https://www.youtube.com/watch?v=KFG6AoEScVE\",\n\"https://www.youtube.com/watch?v=L_jWHffIx5E\",\n\"https://www.youtube.com/watch?v=PWgvGjAhvIw\",\n\"https://www.youtube.com/watch?v=zrFI2gJSuwA\",\n\"https://www.youtube.com/watch?v=bvC_0foemLY\",\n\"https://www.youtube.com/watch?v=CcCw1ggftuQ\",\n\"https://www.youtube.com/watch?v=MMAppa1cAVo\",\n\"https://www.youtube.com/watch?v=oC-GflRB0y4\",\n\"https://www.youtube.com/watch?v=dLhFDYQHDQY\",\n\"https://www.youtube.com/watch?v=pRpeEdMmmQ0\",\n\"https://www.youtube.com/watch?v=kkXAsvrqGLU\"\n];\n\nvar randomItem = myArray[Math.floor(Math.random()*myArray.length)];\n\nActions.storeValue(randomItem, 1, \"randomyt\", cache);",
      "behavior": "0",
      "interpretation": "1",
      "storage": "0",
      "varName": "",
      "VTypeSelect": "0",
      "CVTypeValue": "",
      "name": "Run Script"
    },
    {
      "iftrue": "3",
      "iftrueVal": "1",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check is Bot in Voice Channel"
    },
    {
      "channel": "3",
      "varName": "secret_room_id",
      "name": "Join Voice Channel"
    },
    {
      "url": "${tempVars(\"randomyt\")}",
      "seek": "0",
      "volume": "",
      "passes": "1",
      "bitrate": "",
      "type": "0",
      "quality": "",
      "name": "Play YouTube Video"
    },
    {
      "time": "1",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "sourcetype": "0",
      "source": "IQifK",
      "source2": "",
      "type": "true",
      "name": "Call Command/Event"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "anchor_id": "skip_button_anchor",
      "color": "#00ffff",
      "description": "Skipping the current song.",
      "name": "Create Anchor"
    },
    {
      "member": "2",
      "varName": "last_user",
      "info": "4",
      "varName2": "",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "1",
      "iffalseVal": "",
      "name": "Check If Member"
    },
    {
      "reaction": "1",
      "varName": "reaction",
      "member": "2",
      "varName2": "last_user",
      "name": "Remove Reaction"
    },
    {
      "storage": "1",
      "varName": "lenght",
      "comparison": "4",
      "value": "0",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "1",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "channel": "5",
      "varName": "music_room_id",
      "message": "${tempVars(\"last_user\")} skipping this song...",
      "storage": "1",
      "varName2": "here_store_2",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Send Message"
    },
    {
      "time": "5",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "amount": "1",
      "name": "Skip Queue"
    },
    {
      "storage": "1",
      "varName": "here_store_2",
      "reason": "",
      "name": "Delete Message"
    },
    {
      "time": "1",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "sourcetype": "0",
      "source": "IQifK",
      "source2": "",
      "type": "true",
      "name": "Call Command/Event"
    },
    {
      "name": "End Action Sequence"
    }
  ],
  "temp2": "memberrole"
}
