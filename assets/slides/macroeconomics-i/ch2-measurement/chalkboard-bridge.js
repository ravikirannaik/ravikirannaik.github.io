// chalkboard-bridge.js — Syncs chalkboard drawings between speaker view and presentation
// Uses BroadcastChannel API to relay chalkboard plugin events across windows/iframes
(function () {
  "use strict";

  if (typeof BroadcastChannel === "undefined") return;

  var channel = new BroadcastChannel("reveal-chalkboard-sync");
  var id = Math.random().toString(36).slice(2);

  // Capture outgoing chalkboard events and forward to other windows
  document.addEventListener("broadcast", function (event) {
    if (event.content && event.content.sender === "chalkboard-plugin") {
      channel.postMessage({ senderId: id, content: event.content });
    }
  });

  // Receive chalkboard events from other windows and dispatch locally
  channel.onmessage = function (event) {
    if (event.data && event.data.senderId !== id) {
      var msg = new CustomEvent("received");
      msg.content = event.data.content;
      document.dispatchEvent(msg);
    }
  };
})();
