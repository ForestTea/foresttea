## Welcome everyone here, who found this little place. ##

I'm mostly going to share my Discord Bot Maker RawData-s with those who want it. There's no reason keeping them for myself.

But the most important : **For me all of this works. Download the latest mods for DBM, and update your modules too.**

( Or you probably need to buy the Discord Bot Maker. )
Download the fresh action mods [from here](https://dbm-network.github.io/download-git/#/home?url=https:%2F%2Fgithub.com%2Fdbm-network%2Fmods%2Ftree%2Fmaster%2Factions)
Download the fresh event mods [from here](https://dbm-network.github.io/download-git/#/home?url=https:%2F%2Fgithub.com%2Fdbm-network%2Fmods%2Ftree%2Fmaster%2Fevents)

DISCORD BOT MAKER 1.6 (ONLY)



**Music commands/event**

1. You need to have the latest mods for [1.6 Mods](https://github.com/dbm-network/mods/tree/old_version_v1.6) ( The actions and events folder. )
2. You need to install the [youtubei](https://www.npmjs.com/package/youtubei),[ytdl-core](https://www.npmjs.com/package/ytdl-core) module into your bot project folder.
3. In your Discord Bot Maker program, go to the top left and [install FFMPEG](https://i.ibb.co/rFNLxS3/install-FFMPEG.png) and [update Music Libraries](https://i.ibb.co/f2mKX2Y/update-musiclibraries.png).
4. Now you can collect the raw data for the commands, and for the events. ( Don't forget restarting your bot. )
5. You need to change the [Find Channel] to your [channel ID] and to your [channel Name].
6. Maybe i'm forgot some module what you need, if that's a problem, just see in the console what module you need, and install it.
7. You don't really need to do anything else, just change the [ Channel ID ] in the events too to your own [channel name/id].
8. Put one [Welcome](https://i.ibb.co/T8p92pK/image.png) event like this inside your events.
9. You need to change the [Find Custom Emoji] to your own emoji ID/name inside your events.
10. Newest actions for 1.6: [play_youtube.js](https://github.com/dbm-network/mods/blob/old_version_v1.6/actions/play_youtube.js),[play_youtube_playlist_MOD](https://github.com/dbm-network/mods/blob/old_version_v1.6/actions/play_youtube_playlist_MOD.js)... and many [more](https://github.com/dbm-network/mods/tree/old_version_v1.6/actions).

Play command: [play](https://github.com/ForestTea/foresttea/blob/main/Commands/play)
MusicChannel: [MusicChannel](https://github.com/ForestTea/foresttea/blob/main/Events/MusicChannel.js)
MusicChannelEnded: [MusicChannelEnded](https://github.com/ForestTea/foresttea/blob/main/Events/MusicChannelEnded.js)
MusicButtons: [MusicButtons](https://github.com/ForestTea/foresttea/blob/main/Events/MusicButtons.js)
![Example](https://media4.giphy.com/media/ImY7a5j9rQI9CRtdL4/giphy.gif?cid=790b7611796327d96ae36d626d3080a30618d6a9a86593b8&rid=giphy.gif)


**Interactions with members**
1. Just go to the [hug](https://github.com/ForestTea/foresttea/blob/main/Commands/hug) and copy raw data, create new command in your DBM, and edit raw data and paste it.
2. You can hug someone if you mention him/her. You want a hug if you want to hug yourself or no one.
3. You can create different interactions easily, just open in the DBM the [Run Script] action, and change the urls.

( Don't forget renaming the embed titles and the command names too. 😉 )


**Simple balance storage**
1. Just get the following raw datas, and use the commands. You probably able to see how it works.
[money](https://github.com/ForestTea/foresttea/blob/main/Commands/money) command is here, you can add money with [money.add](https://github.com/ForestTea/foresttea/blob/main/Commands/money.add), and remove money with [money.remove](https://github.com/ForestTea/foresttea/blob/main/Commands/money.remove)

( You can have a [work](https://github.com/ForestTea/foresttea/blob/main/Commands/work) command too. Can use it every 2 hour. )


**Timezone command**
1. You need to install the [spacetime](https://www.npmjs.com/package/spacetime) and the [timezone-soft](https://www.npmjs.com/package/timezone-soft) modules into your bot project folder.
2. Grab the [time](https://github.com/ForestTea/foresttea/blob/main/Commands/time) command from the folder, get the raw data, and add it to your commands.

( Minimal UTC timezone is UTC-12 and the maximum is UTC+14, you can get the 0 with UTC+0 ) [Picture](https://i.ibb.co/swQdK6K/image.png)

( Or try out this [action](https://github.com/ForestTea/foresttea/blob/main/actions/current_utc_time_MOD.js) what give you a selected timezone what you choosing [Picture](https://i.ibb.co/5swYQv1/image.png),[Picture](https://i.ibb.co/f9HqQgd/image.png). )


**Simple emoji counter with remaining slots**
1. Get the events, so you can save the emojis differently from still to animated. [EmojiCreated](https://github.com/ForestTea/foresttea/blob/main/Events/EmojiCreated) and [EmojiDeleted](https://github.com/ForestTea/foresttea/blob/main/Events/EmojiDeleted)
2. Get the [command](https://github.com/ForestTea/foresttea/blob/main/Commands/emojis) what list your emojis numbers with the remaining slots, differently with the server levels.

( You need to create a command for add them manually, if already have emojis on the server. Fresh server the best. )
