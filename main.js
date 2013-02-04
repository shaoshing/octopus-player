chrome.browserAction.onClicked.addListener(function(tab){
  chrome.browserAction.setBadgeText ( { text: "..." } );
  chrome.tabs.getSelected(null, function(tab) {
    chrome.tabs.sendRequest(tab.id, { method: "play-with-quicktime"}, function(response){
      chrome.browserAction.setBadgeText ( { text: "" } );
    });
  });
});
