

chrome.browserAction.onClicked.addListener(function(tab){
  startLoadingAnimation();
  playWithQuickTime();
});


function playWithQuickTime(){
  chrome.tabs.getSelected(null, function(tab) {
    chrome.tabs.sendMessage(tab.id, { method: "play-with-quicktime"}, function(){});
  });
}


loadingAnimation = null;
const textMaxLength = 5;
const animationTime = 6000;
const animationSpeed = 400;
function startLoadingAnimation(){
  stopLoadingAnimation();
  var text = "."
  loadingAnimation = setInterval(function(){
    if(text.length > textMaxLength)
      text = ".";
    chrome.browserAction.setBadgeText ({ text: text });
    text += ".";
  }, animationSpeed);
  setTimeout(stopLoadingAnimation, animationTime);
}
function stopLoadingAnimation(){
  if(loadingAnimation !== null){
    clearInterval(loadingAnimation)
    loadingAnimation = null;
    chrome.browserAction.setBadgeText ({ text: "" });
  }
}
