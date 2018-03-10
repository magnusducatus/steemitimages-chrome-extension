chrome.browserAction.onClicked.addListener(function() {
	
	chrome.windows.create({
		type: 'popup',
		url: chrome.runtime.getURL('index.html'),
		width: 800,
		height: 500
	});
	
});