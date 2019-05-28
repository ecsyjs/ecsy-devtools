function log() {
	var args = Array.from( arguments );
 	args.unshift( 'background: #9999ff; color: #ffffff;' );
	args.unshift( `%c ECSY Background` );

	console.log.apply( console, args );
}

var extensionId = browser.runtime.id;
log( 'Background', extensionId );

var devtools = {};
var scripts = {}

var script = '';

fetch( browser.extension.getURL( 'inject.js' ) ).then( res => res.text() ).then( res => script = res )

// content-script => background
// devtools => background
browser.runtime.onConnect.addListener( function( port ) {

	log( 'New connection (browser.runtime.onConnect) from', port.name, port );

	var name = port.name;

	function listener( msg, sender, reply ) {

		var tabId;

		if( msg.tabId ) tabId = msg.tabId
		else tabId = sender.sender.tab.id;

		if( name === 'devtools' ) devtools[ tabId ] = port;
		if( name === 'content-script' ) scripts[ tabId ] = port;

		log( 'port.onMessage', port.name, msg );
		if( name === 'devtools' ) {
			if( msg.method === 'ready' ) {
				port.postMessage( { method: 'script', script: script } )
			}
		}

		if( name === 'content-script' ) {
			if( msg.method === 'ready' ) {
				port.postMessage( { method: 'script', script: script } )
			} else {
				if ( devtools[ tabId ] ) {
					devtools[ tabId ].postMessage( msg );
				}
			}
		}

	}

	port.onMessage.addListener( listener );
/*
	port.onDisconnect.addListener( function() {

		port.onMessage.removeListener( listener );

		log( name, 'disconnect (browser.runtime.onDisconnect)' );

	} );

	port.postMessage( { action: 'ack' } );
*/
	return true;

});
