chrome.tabs.getSelected(null, function (tab) {
	var url = tab.url;
	if (url.indexOf('youtube.com') < 0) {
		return;
	}
	if (url.indexOf('ssyoutube.com') > -1) {
		return;
	}
	url = url.replace('youtube.com', 'ssyoutube.com');
	console.log(url);
	chrome.tabs.update(tab.id, {url: url});
});