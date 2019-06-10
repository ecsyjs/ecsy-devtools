'use strict';

if( !window.__ECSY_DEVTOOLS_INJECTED ) {
	function sendMessage( type, data ) {
		window.postMessage({
			id: 'ecsy-devtools',
			method: type,
			data,
		}, '*');
	}

	sendMessage('reset');

	window.addEventListener('ecsy-world-created', e => {
		var world = e.detail;
		var ori1 = world.execute;
		world.execute = function() {
			var result = ori1.apply(world, arguments);
			refreshStats();
			return result;
		}

		function refreshStats() {
			const systems = world.systemManager.systems.map(system => {
				var json = system.toJSON();
				// Clear executeTime if it's not enabled
				if (!json.enabled) json.executeTime = 0;
				return json;
			});

			const queries = Object.values(world.entityManager._queryManager._queries).map(q => {
				return {
					key: q.key,
					components: q.Components.map(C => C.name),
					numEntities: q.entities.length
				}
			});

			var components = world.componentsManager.numComponents;
			var data = {
				world: {
					enabled: world.enabled
				},
				numEntities: world.entityManager._entities.length,
				systems: systems,
				queries: queries,
				components: components
			};
			sendMessage('refreshData', data);
		}
	});

	function log() {
		var args = Array.from( arguments );
		 args.unshift( 'background: #9999ff; color: #ffffff;' );
		args.unshift( `%c ECSY Injector ` );

		console.log.apply( console, args );
	}

	log( 'ECSYInspector injected', document.location.href );

	window.__ECSY_DEVTOOLS_INJECTED = true;
}