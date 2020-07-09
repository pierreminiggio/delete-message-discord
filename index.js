var before = 'LAST_MESSAGE_ID';
clearMessages = function(){
	const channel = window.location.href.split('/').pop();
	const baseURL = `https://discord.com/api/v6/channels/${channel}/messages`;
	const headers = {"Authorization": "YOUR_DISCORD_TOKEN"};

	let clock = 0;
	let interval = 1500;

	function delay(duration) {
		return new Promise((resolve, reject) => {
			setTimeout(() => resolve(), duration);
		});
	}

	fetch(baseURL + '?before=' + before + '&limit=100', {headers})
		.then(resp => resp.json())
		.then(messages => {
			console.log(messages)
			return Promise.all(messages.map((message) => {
				before = message.id;
				return delay(clock += interval).then(() => fetch(`${baseURL}/${message.id}`, {headers, method: 'DELETE'}));
			}));
	}).then(() => clearMessages());
}
clearMessages();
