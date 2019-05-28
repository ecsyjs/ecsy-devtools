var verbose = false;

var port = chrome.runtime.connect( { name: "content-script" } );

// content-script => background-script
port.postMessage( { method: 'ready' });

function log() {
	var args = Array.from( arguments );
 	args.unshift( 'background: #9999ff; color: #ffffff;' );
	args.unshift( `%c ECSY ContentScript ` );

	console.log.apply( console, args );
}

log( 'content-script' );

// content-script <= background-script
port.onMessage.addListener( function( msg ) {
	if( verbose ) log( msg );

	switch( msg.method ) {
		case 'script': {
			var source = '(function(){' + msg.script + '})();';
			var script = document.createElement('script');
			script.textContent = source;
			(document.head||document.documentElement).appendChild(script);
			script.parentNode.removeChild(script);
		} break;
	}
} );
/*
port.onDisconnect.addEventListener( function() {
	port = null;
	log( 'Port disconnected' );
})
*/

// app(injected) => content-script
window.addEventListener( 'ecsyinspector-view', e => {
	let message = e.detail;
	log('ecsyinspector-view', message, e.detail.data);
	//message.data = Array.prototype.slice.call( message.data );
	// port.postMessage( message );
	port.postMessage( { data: message } );

} );