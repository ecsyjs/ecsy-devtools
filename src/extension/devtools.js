var globalBrowser =  chrome || browser;

// @todo Import browser polyfill
globalBrowser.devtools.panels.create(
  "ECSY",
  "/assets/icon_128_detected.png",
  "/src/app/index.html"
);
