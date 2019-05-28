function log() {
	var args = Array.from(arguments);
 	args.unshift('background: #9999ff; color: #ffffff;');
	args.unshift(`%c ECSY ContentScript `);

	console.log.apply( console, args );
}

log( 'content-script' );

var port = chrome.runtime.connect({ name: "content-script" });

// content-script => background-script
var script = '';
fetch( browser.extension.getURL( 'src/content/index.js' ) )
	.then(res => res.text())
	.then(res => {
		script = res;
		var source = '(function(){' + script + '})();';
		var script = document.createElement('script');
		script.textContent = source;
		script.onload = () => {
			script.parentNode.removeChild(script);
		}
		(document.head||document.documentElement).appendChild(script);
	});

// app(injected) => content-script
window.addEventListener('ecsyinspector-view', e => {
	let message = e.detail;
	log('ecsyinspector-view', message, e.detail.data);
	port.postMessage({ data: message });
});
