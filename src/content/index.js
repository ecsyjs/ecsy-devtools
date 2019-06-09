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

		var oriRegCen = world.createEntity;
		world.createEntity = function() {
			sendMessage('createEntity');
			return oriRegCen.apply(world, arguments);
		}

		var oriRegC = world.registerComponent;
		world.registerComponent = function(Component) {
			sendMessage('registerComponent', Component.name);
			return oriRegC.apply(world, arguments);
		}

		var oriRegS = world.registerSystem;
		world.registerSystem = function(System) {
			var result = oriRegS.apply(world, arguments);
			var system = world.systemManager.systems.find(s => s.constructor.name === System.name);
			sendMessage('registerSystem', system.toJSON());
			return result;
		}

		var oriAddC = world.entityManager.entityAddComponent;
		world.entityManager.entityAddComponent = function(entity, Component, values) {
			var num = entity._ComponentTypes.length;
			var result = oriAddC.apply(world.entityManager, arguments);
			if (entity._ComponentTypes.length === num + 1) {
				sendMessage('addComponent', Component.name);
				refreshQueries();
			}
			return result;
		}

		var oriRemC = world.entityManager.entityRemoveComponent;
		world.entityManager.entityRemoveComponent = function(entity, Component, values) {
			var num = entity._ComponentTypes.length;
			var result = oriRemC.apply(world.entityManager, arguments);
			if (entity._ComponentTypes.length === num - 1) {
				sendMessage('removeComponent', Component.name);
				refreshQueries();
			}
			return result;
		}

		var ori0 = world.entityManager.queryComponents;
		world.entityManager.queryComponents = function() {
			var num = Object.keys(world.entityManager._queryManager._queries).length;
			var query = ori0.apply(world.entityManager, arguments);
			if (Object.keys(world.entityManager._queryManager._queries).length === num + 1) {
				sendMessage('addQuery', {
					key: query.key,
					components: query.Components.map(C => C.name),
					numEntities: query.entities.length,
				});
			}
			return query;
		}


		var ori1 = world.execute;
		world.execute = function() {
			var result = ori1.apply(world, arguments);
			refreshStats();
			return result;
		}

		function refreshQueries() {
			var data = [];
			var queries = world.entityManager._queryManager._queries;
			for (var name in queries) {
				var query = queries[name];
				data.push({
					key: name,
					components: query.Components.map(C => C.name),
					numEntities: query.entities.length
				});
			}
			sendMessage('refreshQueries', data);

			var data = world.systemManager.systems.map(system => system.toJSON());
			sendMessage('refreshSystems', data);
		}

		function refreshStats() {
			var data = world.systemManager.systems.map(system => {
				return {
					name: system.constructor.name,
					executeTime: system.executeTime
				};
			});
			sendMessage('refreshStats', data);
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