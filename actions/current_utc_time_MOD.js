module.exports = {
	
	name: "Current UTC Time",
	
	section: "Other Stuff",
	
	subtitle: function(data) {
		const time = ["UTC+0 Africa/Abidjan", "UTC+1 Africa/Bangui", "UTC+2 Africa/Cairo", "UTC+3 Turkey", "UTC+4 Asia/Dubai", "UTC+5 Asia/Atyrau", "UTC+6 Asia/Dhaka", "UTC+7 Asia/Jakarta", "UTC+8 Singapore", "UTC+9 Asia/Tokyo", "UTC+10 Australia/Lindeman", "UTC+11 Pacific/Efate", "UTC+12 Antarctica/McMurdo", "UTC+13 Pacific/Enderbury", "UTC+14 Pacific/Kiritimati", "UTC-1 Atlantic/Azores", "UTC-2 Brazil/DeNoronha", "UTC-3 America/Jujuy", "UTC-4 America/Dominica", "UTC-5 America/New_York", "UTC-6 Chile/EasterIsland", "UTC-7 America/Ojinaga", "UTC-8 America/Los_Angeles", "UTC-9 America/Juneau", "UTC-10 US/Aleutian", "UTC-11 America/Adak", "UTC-12 Etc/GMT-12"];
		return `${time[parseInt(data.type)]}`;
	},
	
  variableStorage (data, varType) {
    const type = parseInt(data.storage)
    if (type !== varType) return
    return ([data.varName, result]);
  },
  
  fields: ['type', 'storage', 'varName'],
  
	html: function(isEvent, data) {
		return `
<div>
	<div style="padding-top: 8px; width: 70%;">
		Time Info:<br>
		<select id="type" class="round">
			<option value="0" selected>UTC+0 Africa/Abidjan</option>
			<option value="1">UTC+1 Africa/Bangui</option>
			<option value="2">UTC+2 Africa/Cairo</option>
			<option value="3">UTC+3 Turkey</option>
			<option value="4">UTC+4 Asia/Dubai</option>
			<option value="5">UTC+5 Asia/Atyrau</option>
			<option value="6">UTC+6 Asia/Dhaka</option>
			<option value="7">UTC+7 Asia/Jakarta</option>
			<option value="8">UTC+8 Singapore</option>
			<option value="9">UTC+9 Asia/Tokyo</option>
			<option value="10">UTC+10 Australia/Lindeman</option>
			<option value="11">UTC+11 Pacific/Efate</option>
			<option value="12">UTC+12 Antarctica/McMurdo</option>
			<option value="13">UTC+13 Pacific/Enderbury</option>
			<option value="14">UTC+14 Pacific/Kiritimati</option>
			<option value="15">UTC-1 Atlantic/Azores</option>
			<option value="16">UTC-2 Brazil/DeNoronha</option>
			<option value="17">UTC-3 America/Jujuy</option>
			<option value="18">UTC-4 America/Dominica</option>
			<option value="19">UTC-5 America/New_York</option>
			<option value="20">UTC-6 Chile/EasterIsland</option>
			<option value="21">UTC-7 America/Ojinaga</option>
			<option value="22">UTC-8 America/Los_Angeles</option>
			<option value="23">UTC-9 America/Juneau</option>
			<option value="24">UTC-10 US/Aleutian</option>
			<option value="25">UTC-11 America/Adak</option>
			<option value="26">UTC-12 Etc/GMT-12</option>
		</select>
	</div>
</div><br>
<div>
	<div style="float: left; width: 35%;">
		Store In:<br>
		<select id="storage" class="round">
			${data.variables[1]}
		</select>
	</div>
	<div id="varNameContainer" style="float: right; width: 60%;">
		Variable Name:<br>
		<input id="varName" class="round" type="text"><br>
	</div>
</div>`;
	},
	
	init: function() {},
	
	
		action: function(cache) {
		const data = cache.actions[cache.index];
		const type = parseInt(data.type);
		const zone = new Date();
		let result;
		switch(type) {
			case 0:
				result = zone.toLocaleString("en-US", {timeZone: "Etc/GMT+0"});
				break;
			case 1:
				result = zone.toLocaleString("en-US", {timeZone: "Etc/GMT-1"});
				break;
			case 2:
				result = zone.toLocaleString("en-US", {timeZone: "Etc/GMT-2"});
				break;
			case 3:
				result = zone.toLocaleString("en-US", {timeZone: "Etc/GMT-3"});
				break;
			case 4:
				result = zone.toLocaleString("en-US", {timeZone: "Etc/GMT-4"});
				break;
			case 5:
				result = zone.toLocaleString("en-US", {timeZone: "Etc/GMT-5"});
				break;
			case 6:
				result = zone.toLocaleString("en-US", {timeZone: "Etc/GMT-6"});
				break;
			case 7:
				result = zone.toLocaleString("en-US", {timeZone: "Etc/GMT-7"});
				break;
			case 8:
				result = zone.toLocaleString("en-US", {timeZone: "Etc/GMT-8"});
				break;
			case 9:
				result = zone.toLocaleString("en-US", {timeZone: "Etc/GMT-9"});
				break;
			case 10:
				result = zone.toLocaleString("en-US", {timeZone: "Etc/GMT-10"});
				break;
			case 11:
				result = zone.toLocaleString("en-US", {timeZone: "Etc/GMT-11"});
				break;
			case 12:
				result = zone.toLocaleString("en-US", {timeZone: "Etc/GMT-12"});
				break;
			case 13:
				result = zone.toLocaleString("en-US", {timeZone: "Etc/GMT-13"});
				break;
			case 14:
				result = zone.toLocaleString("en-US", {timeZone: "Etc/GMT-14"});
				break;
			case 15:
				result = zone.toLocaleString("en-US", {timeZone: "Etc/GMT+1"});
				break;
			case 16:
				result = zone.toLocaleString("en-US", {timeZone: "Etc/GMT+2"});
				break;
			case 17:
				result = zone.toLocaleString("en-US", {timeZone: "Etc/GMT+3"});
				break;
			case 18:
				result = zone.toLocaleString("en-US", {timeZone: "Etc/GMT+4"});
				break;
			case 19:
				result = zone.toLocaleString("en-US", {timeZone: "Etc/GMT+5"});
				break;
			case 20:
				result = zone.toLocaleString("en-US", {timeZone: "Etc/GMT+6"});
				break;
			case 21:
				result = zone.toLocaleString("en-US", {timeZone: "Etc/GMT+7"});
				break;
			case 22:
				result = zone.toLocaleString("en-US", {timeZone: "Etc/GMT+8"});
				break;
			case 23:
				result = zone.toLocaleString("en-US", {timeZone: "Etc/GMT+9"});
				break;
			case 24:
				result = zone.toLocaleString("en-US", {timeZone: "Etc/GMT+10"});
				break;
			case 25:
				result = zone.toLocaleString("en-US", {timeZone: "Etc/GMT+11"});
				break;
			case 26:
				result = zone.toLocaleString("en-US", {timeZone: "Etc/GMT+12"});
				break;
			default:
				break;
		}
		if(result !== undefined) {
			const storage = parseInt(data.storage);
			const varName = this.evalMessage(data.varName, cache);
			this.storeValue(result, storage, varName, cache);
		}
		this.callNextAction(cache);
	},


	mod: function() {}
};
