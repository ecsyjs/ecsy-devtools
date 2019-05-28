'use strict';

if( !window.__ECSY_INSPECTOR_INJECTED ) {
	function sendMessage( type, obj ) {
		var message = { source: 'ecsyinspector-script', method: type, data: obj };
		var e = new CustomEvent( 'ecsyinspector-view', { detail: message } );
		window.dispatchEvent( e );
	}

	window.addEventListener('ecsy-world-created', e => {
		var world = e.detail;

		var oriRegCen = world.createEntity;
		world.createEntity = function() {
			console.log('Create new entity');
			sendMessage('createEntity');
			return oriRegCen.apply(world, arguments);
		}


		var oriRegC = world.registerComponent;
		world.registerComponent = function(Component) {
			console.log('Registering component', Component.name);
			sendMessage('registerComponent', Component.name);
			return oriRegC.apply(world, arguments);
		}

		var oriAddC = world.entityManager.entityAddComponent;
		world.entityManager.entityAddComponent = function(entity, Component, values) {
			console.log('Adding component to entity', Component.name);
			sendMessage('addComponent', Component.name);
			return oriAddC.apply(world.entityManager, arguments);
		}
	});

	function log() {
		var args = Array.from( arguments );
		 args.unshift( 'background: #9999ff; color: #ffffff;' );
		args.unshift( `%c ECSY Injector ` );

		console.log.apply( console, args );
	}

	log( 'ECSYInspector injected', document.location.href );

	window.__ECSY_INSPECTOR_INJECTED = true;
}