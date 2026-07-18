// scroll-nav.js — Bostock-style scroll-driven navigation for RevealJS
// One scroll gesture = one slide/fragment advance, with crossfade transitions
// Debounced to prevent rapid-fire skipping from trackpad momentum

(function () {
  "use strict";

  var COOLDOWN_MS = 450;
  var DELTA_THRESHOLD = 30;

  function init() {
    if (typeof Reveal === "undefined" || !Reveal.isReady()) {
      setTimeout(init, 100);
      return;
    }

    var locked = false;

    document.querySelector(".reveal").addEventListener(
      "wheel",
      function (e) {
        if (Math.abs(e.deltaY) < DELTA_THRESHOLD) return;

        e.preventDefault();
        if (locked) return;
        locked = true;

        if (e.deltaY > 0) {
          Reveal.next();
        } else {
          Reveal.prev();
        }

        setTimeout(function () {
          locked = false;
        }, COOLDOWN_MS);
      },
      { passive: false }
    );
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
