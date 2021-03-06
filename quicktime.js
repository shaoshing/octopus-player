window.addEventListener("message", function(message){
  if(message.data !== "quicktime") return;

  var videoUrl = null;
  if(window.videoId)
    videoUrl = "http://v.youku.com/player/getM3U8/vid/"+window.videoId+"/type/hd2/ts//v.m3u8";
  else if(window.vid)
    videoUrl = "http://hot.vrs.sohu.com/ipad"+window.vid+".m3u8";

  if(videoUrl !== null){
    console.log("octopus: "+videoUrl);
    InsetQuickTimeObject(videoUrl);
  }else
    console.log("octopus: no video");
}, false);


function InsetQuickTimeObject(videoUrl){
  var obj = document.createElement('object');
  obj.style.position = 'absolute';
  obj.style.visibility = 'hidden';
  obj.style.top = obj.style.left = '-128px';
  obj.style.width = obj.style.height = '1px';
  obj.type = 'video/quicktime';
  obj.data = 'data:video/quicktime;base64,\ AAAAIGZ0eXBxdCAgIAUDAHF0ICAAAAAAAAAAAAAAAAAAAAUjbW9vdgAAAGxtdmhkAAAAAMNzerLDc3qyAAACWAAAAAYAAQAAAQAAAAAAAAAAAA\ AAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAlF0cmFrAAAAXHRraGQA\ AAAPw3N6qMNzerIAAAABAAAAAAAAAAYAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAEAAAABAA\ AAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAAAGAAAAAAABAAAAAAG9bWRpYQAAACBtZGhkAAAAAMNzerLDc3qyAAACWAAAAAYAAAAAAAAAOmhk\ bHIAAAAAbWhscnZpZGVhcHBsEAAAAAABASkZQXBwbGUgVmlkZW8gTWVkaWEgSGFuZGxlcgAAAVttaW5mAAAAFHZtaGQAAAABAQOAAIAAgAAAAA\ A5aGRscgAAAABkaGxyYWxpc2FwcGwQAAABAAEBQRhBcHBsZSBBbGlhcyBEYXRhIEhhbmRsZXIAAAAkZGluZgAAABxkcmVmAAAAAAAAAAEAAAAM\ YWxpcwAAAAEAAADic3RibAAAAH5zdHNkAAAAAAAAAAEAAABuZ2lmIAAAAAAAAAABAAAAAAAAAAAAAAIAAAACAAABAAEASAAAAEgAAAAAAAAAAQ\ NHSUYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAACAAAABgAAAAAAAAACAAAAAAAAAAAAAABhzdHRzAAAAAAAAAAEAAAABAAAA\ BgAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAAAUc3RzegAAAAAAAAAqAAAAAQAAABRzdGNvAAAAAAAAAAEAAAVrAAAADHVkdGEAAAAAAA\ ACNG1ldGEAAAAgaGRscgAAAAAAAAAAbWR0YQAAAAAAAAAAAAAAAAAAAThrZXlzAAAAAAAAAAYAAAA6bWR0YWNvbS5hcHBsZS5xdWlja3RpbWUu\ cGxheWVyLm1vdmllLnZpc3VhbC5icmlnaHRuZXNzAAAANW1kdGFjb20uYXBwbGUucXVpY2t0aW1lLnBsYXllci5tb3ZpZS52aXN1YWwuY29sb3\ IAAAA0bWR0YWNvbS5hcHBsZS5xdWlja3RpbWUucGxheWVyLm1vdmllLnZpc3VhbC50aW50AAAAOG1kdGFjb20uYXBwbGUucXVpY2t0aW1lLnBs\ YXllci5tb3ZpZS52aXN1YWwuY29udHJhc3QAAAAqbWR0YWNvbS5hcHBsZS5xdWlja3RpbWUucGxheWVyLnZlcnNpb24AAAAjbWR0YWNvbS5hcH\ BsZS5xdWlja3RpbWUudmVyc2lvbgAAANRpbHN0AAAAHAAAAAEAAAAUZGF0YQAAABcAAAAAAAAAAAAAABwAAAACAAAAFGRhdGEAAAAXAAAAAD+A\ AAAAAAAcAAAAAwAAABRkYXRhAAAAFwAAAAAAAAAAAAAAHAAAAAQAAAAUZGF0YQAAABcAAAAAP4AAAAAAAB0AAAAFAAAAFWRhdGEAAAABAAAAAD\ cuMi4xAAAAPwAAAAYAAAA3ZGF0YQAAAAEAAAAANy4yLjEgMHg3MjE4MDAwIChNYWMgT1MgWCwgMTAuNSwgOUE1ODEpAAAAKnVkdGEAAAAMV0xP\ QwAtABUAAAAJU2VsTwAAAAAJQWxsRgAAAAAAAAAACGZyZWUAAAAId2lkZQAAAEJtZGF0AAAACHdpZGUAAAAAbWRhdEdJRjg5YQEAAQCAAAAAAA\ AAAAAh+QQBAAAAACwAAAAAAQABAAACAkQBAA==';

  var params = { target: 'quicktimeplayer', postdomevents: 'true', href: videoUrl, autohref: 'true', autostart: 'false', controller: 'false', cache: 'true', spec: 'qt' };

  for (var name in params) {
    var param = document.createElement('param');
    param.name = name;
    param.value = params[name];
    obj.appendChild(param);
  }

  document.body.appendChild(obj);
}
