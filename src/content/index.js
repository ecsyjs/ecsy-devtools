'use strict';

if( !window.__ECSY_DEVTOOLS_INJECTED ) {
	function sendMessage( type, data ) {
		window.postMessage({
			id: 'ecsy-devtools',
			method: type,
			data,
		}, '*');
	}

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

		var oriAddC = world.entityManager.entityAddComponent;
		world.entityManager.entityAddComponent = function(entity, Component, values) {
			var num = entity._ComponentTypes.length;
			var result = oriAddC.apply(world.entityManager, arguments);
			if (entity._ComponentTypes.length === num + 1) {
				sendMessage('addComponent', Component.name);
			}
			return result;
		}

		var oriRemC = world.entityManager.entityRemoveComponent;
		world.entityManager.entityRemoveComponent = function(entity, Component, values) {
			var num = entity._ComponentTypes.length;
			var result = oriRemC.apply(world.entityManager, arguments);
			if (entity._ComponentTypes.length === num - 1) {
				sendMessage('removeComponent', Component.name);
			}
			return result;
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