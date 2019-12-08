var globalBrowser =  typeof chrome !== 'undefined' ? chrome : typeof browser !== 'undefined' ? browser : null;

// @todo Import browser polyfill
globalBrowser.devtools.panels.create(
  "ECSY",
  "/assets/icon_128_detected.png",
  "/src/app/index.html");
