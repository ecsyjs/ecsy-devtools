// @todo Import browser polyfill
browser.devtools.panels.create(
  "ECSY",
  "/assets/icon_128.png",
  "/src/app/index.html"
).then(panel => {
	panel.onShown.addListener(function (wnd) {
		browser.devtools.inspectedWindow.eval('console.log("onShow");')
		panelWindow = wnd;
	});
});

var port = browser.runtime.connect( { name: "devtools" } );
var tabId = browser.devtools.inspectedWindow.tabId;

function post( msg ) {

	msg.tabId = tabId;
	port.postMessage( msg );

}

var panelWindow = null;

port.onMessage.addListener( function( msg ) {
	if( msg.method === 'script' ) {
		var script = msg.script;

		browser.devtools.inspectedWindow.eval( 'window.__ECSY_INSPECTOR_INJECTED', function(result, isException) {
		console.log( 'check:', result, isException );
			if( result !== true ) {
				console.log( 'Not instrumented. Possibly remote debugging' );
				var source = '(function(){' + msg.script + '})();';
				browser.devtools.inspectedWindow.eval( source, function(result, isException) {
					console.log( 'injection:', result, isException );
				} );
				console.log( 'poll' );
				poll();
			}
		} )
		return;
	}

	if (panelWindow) {
		panelWindow.processMessage(msg);
	}
});

post( { method: 'ready' } );
