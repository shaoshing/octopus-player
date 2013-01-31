

chrome.browserAction.onClicked.addListener(function(tab){
  chrome.browserAction.setBadgeText ( { text: "..." } );
  chrome.tabs.executeScript(tab.id, {file: "quicktime.js"}, function(){
    chrome.browserAction.setBadgeText ( { text: "" } );
  });
});
