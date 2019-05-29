var globalBrowser =  chrome || browser;

// @todo Import browser polyfill
globalBrowser.devtools.panels.create(
  "ECSY",
  "/assets/icon_128.png",
  "/src/app/index.html"
);
