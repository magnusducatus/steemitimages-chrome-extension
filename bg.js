chrome.browserAction.onClicked.addListener(function() {
	
	chrome.windows.create({
		type: 'popup',
		url: chrome.runtime.getURL('index.html'),
		width: 1300,
		height: 700
	});
	
});