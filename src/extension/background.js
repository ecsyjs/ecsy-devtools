// @todo import browser
function log() {
	var args = Array.from( arguments );
 	args.unshift( 'background: #9999ff; color: #ffffff;' );
	args.unshift( `%c ECSY Background ` );

	console.log.apply( console, args );
}

var devtools = new Map();
var scripts = new Map()

var script = '';

fetch( browser.extension.getURL( 'src/content/index.js' ) ).then( res => res.text() ).then( res => script = res )

// content-script => background
// devtools => background
browser.runtime.onConnect.addListener( function( port ) {

	log( 'New connection (browser.runtime.onConnect) from', port.name, port );

	var name = port.name;

	const onMessage = (msg, sender) => {
		var tabId;

		if(msg.tabId) tabId = msg.tabId
		else tabId = sender.sender.tab.id;

		if (name === 'devtools') devtools.set(tabId, port);
		if (name === 'content-script') scripts.set(tabId, port);

		log('port.onMessage', port.name, msg);
		if( name === 'devtools' ) {
			if( msg.method === 'ready' ) {
				port.postMessage( { method: 'script', script: script } )
			}
		}

		if( name === 'content-script' ) {
			if( msg.method === 'ready' ) {
				port.postMessage( { method: 'script', script: script } )
			} else {
				if ( devtools.has(tabId) ) {
					devtools.get(tabId).postMessage( msg );
				}
			}
		}
	}

	port.onMessage.addListener(onMessage);

	port.onDisconnect.addListener( function() {
		if (name === 'devtools') devtools.delete(tabId);
		if (name === 'content-script') scripts.delete(tabId);
		port.onMessage.removeListener( listener );
	} );
	return true;
});

chrome.runtime.onMessage.addListener((request, sender) => {
  if (sender.tab) {
    const tabId = sender.tab.id;
    if (connections.has(tabId)) {
      connections.get(tabId).postMessage(request);
    }
  }
  return true;
});
