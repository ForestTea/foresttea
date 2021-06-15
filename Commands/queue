
{
  "name": "queue",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "MlNoD",
  "actions": [
    {
      "info": "1",
      "find": "bot_commands",
      "storage": "1",
      "varName": "bot_room",
      "name": "Find Channel"
    },
    {
      "storage": "0",
      "varName": "",
      "reason": "",
      "name": "Delete Message"
    },
    {
      "member": "1",
      "varName": "",
      "info": "3",
      "storage": "1",
      "varName2": "dispname",
      "name": "Store Member Info"
    },
    {
      "member": "1",
      "varName": "",
      "info": "16",
      "storage": "1",
      "varName2": "avatar",
      "name": "Store Member Info"
    },
    {
      "server": "0",
      "info": "5",
      "storage": "1",
      "varName": "url_length",
      "varName2": "",
      "name": "Store Audio Info"
    },
    {
      "storage": "1",
      "varName": "url_length",
      "comparison": "0",
      "value": "0",
      "iftrue": "0",
      "iftrueVal": "no_one",
      "iffalse": "4",
      "iffalseVal": "no_one",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "url_length",
      "comparison": "1",
      "value": "1",
      "iftrue": "4",
      "iftrueVal": "only_one",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "stringifyOutput": "0",
      "varName": "link",
      "hostname": "",
      "port": "",
      "username": "",
      "password": "",
      "database": "",
      "query": "SELECT Link FROM youtube ORDER BY rowid ASC LIMIT 20;",
      "path": "$..Link",
      "otype": "0",
      "source_conn_storage": "2",
      "source_conn_varName": "Database",
      "store_source_conn_storage": "0",
      "store_source_conn_varName": "",
      "debugMode": "0",
      "name": "Run SQL Query"
    },
    {
      "storage": "1",
      "stringifyOutput": "0",
      "varName": "title",
      "hostname": "",
      "port": "",
      "username": "",
      "password": "",
      "database": "",
      "query": "SELECT Title FROM youtube ORDER BY rowid ASC LIMIT 20;",
      "path": "$..Title",
      "otype": "0",
      "source_conn_storage": "2",
      "source_conn_varName": "Database",
      "store_source_conn_storage": "0",
      "store_source_conn_varName": "",
      "debugMode": "0",
      "name": "Run SQL Query"
    },
    {
      "storage": "1",
      "stringifyOutput": "0",
      "varName": "rowid",
      "hostname": "",
      "port": "",
      "username": "",
      "password": "",
      "database": "",
      "query": "SELECT ID FROM youtube LIMIT 20;",
      "path": "$..ID",
      "otype": "0",
      "source_conn_storage": "2",
      "source_conn_varName": "Database",
      "store_source_conn_storage": "0",
      "store_source_conn_varName": "",
      "debugMode": "0",
      "name": "Run SQL Query"
    },
    {
      "list": "7",
      "varName": "title",
      "start": "",
      "middle": "",
      "end": "\\n",
      "storage": "1",
      "varName2": "title2",
      "sort": "1",
      "name": "Convert List to Text"
    },
    {
      "list": "7",
      "varName": "link",
      "start": "[Link](https://www.youtube.com/watch?v=",
      "middle": "",
      "end": ")\\n",
      "storage": "1",
      "varName2": "link2",
      "sort": "1",
      "name": "Convert List to Text"
    },
    {
      "list": "7",
      "varName": "rowid",
      "start": "",
      "middle": "",
      "end": "\\n",
      "storage": "1",
      "varName2": "rowid2",
      "sort": "0",
      "name": "Convert List to Text"
    },
    {
      "title": "Queue",
      "author": "",
      "color": "",
      "url": "",
      "authorIcon": "",
      "authorUrl": "",
      "imageUrl": "",
      "thumbUrl": "https://play-lh.googleusercontent.com/KX2NePpo3sXmLEJxzAHihURbNH6i3kSEvgWs3b6rZeLGqlv-AefbTitt8rEYOtjJHIs",
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
      "fieldName": "Queue",
      "message": "${tempVars(\"rowid2\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "msg",
      "fieldName": "Title",
      "message": "${tempVars(\"title2\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "msg",
      "fieldName": "Link",
      "message": "${tempVars(\"link2\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "msg",
      "message": "Commnand used by: ${tempVars(\"dispname\")}",
      "footerIcon": "${tempVars(\"avatar\")}",
      "name": "Set Embed Footer"
    },
    {
      "storage": "1",
      "varName": "msg",
      "channel": "5",
      "varName2": "bot_room",
      "storage3": "0",
      "varName3": "",
      "iffalse": "0",
      "iffalseVal": "",
      "messageContent": "",
      "name": "Send Embed Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "anchor_id": "no_one",
      "color": "#00ff00",
      "description": "There's nothing in the queue.",
      "name": "Create Anchor"
    },
    {
      "channel": "5",
      "varName": "bot_room",
      "message": "**The queue is empty.**",
      "storage": "0",
      "varName2": "",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "anchor_id": "only_one",
      "color": "#00ff00",
      "description": "Only one item in the queue.",
      "name": "Create Anchor"
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
      "title": "There's only one song in the queue.",
      "author": "",
      "color": "",
      "url": "",
      "authorIcon": "",
      "authorUrl": "",
      "imageUrl": "",
      "thumbUrl": "https://play-lh.googleusercontent.com/KX2NePpo3sXmLEJxzAHihURbNH6i3kSEvgWs3b6rZeLGqlv-AefbTitt8rEYOtjJHIs",
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
      "varName": "messg",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "messg",
      "message": "[${tempVars(\"next_title\")}](${tempVars(\"next_url\")})",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "messg",
      "fieldName": "Requester",
      "message": "${tempVars(\"next_requester\")}",
      "inline": "1",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "messg",
      "message": "Command used by.: ${tempVars(\"dispname\")}",
      "footerIcon": "${tempVars(\"avatar\")}",
      "name": "Set Embed Footer"
    },
    {
      "storage": "1",
      "varName": "messg",
      "channel": "5",
      "varName2": "bot_room",
      "storage3": "0",
      "varName3": "",
      "iffalse": "0",
      "iffalseVal": "",
      "messageContent": "",
      "name": "Send Embed Message"
    }
  ]
}
