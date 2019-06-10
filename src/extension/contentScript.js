var globalBrowser =  chrome || browser;

function log() {
	var args = Array.from(arguments);
 	args.unshift('background: #9999ff; color: #ffffff;');
	args.unshift(`%c ECSY ContentScript `);

	console.log.apply( console, args );
}

// content-script => background-script
var script = '';
fetch( globalBrowser.extension.getURL( 'src/content/index.js' ) )
	.then(res => res.text())
	.then(res => {
		var source = '(function(){' + res + '})();';
		var script = document.createElement('script');
		script.textContent = source;
		script.onload = () => {
			script.parentNode.removeChild(script);
		}
		(document.head||document.documentElement).appendChild(script);
	});

window.addEventListener('message', e => {
	if (e.source !== window ||
			typeof e.data !== 'object' ||
			e.data.id !== 'ecsy-devtools') {
				return;
			}

	let message = e.data;
	chrome.runtime.sendMessage(message);
});