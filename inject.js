var script = document.createElement('script');
script.src = chrome.extension.getURL("quicktime.js");
(document.head||document.documentElement).appendChild(script);
script.onload = function() {
  this.parentNode.removeChild(this);
};

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  if (request.method === "play-with-quicktime")
    window.postMessage("quicktime", '*');
  return true;
});
