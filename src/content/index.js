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

		if (!window.__ECSY_DEVTOOLS) {
			window.__ECSY_DEVTOOLS = {
				worlds: []
			};
		}

		var world = e.detail;

		window.__ECSY_DEVTOOLS.worlds.push(world);

		var ori1 = world.execute;

		var stats = {
			processDeferredRemoval: 0
		};

		world.execute = function(delta, time) {
			if (this.enabled) {
				this.systemManager.execute(delta, time);
				let t = performance.now();
				this.entityManager.processDeferredRemoval();
				stats.processDeferredRemoval = performance.now() - t;
			}
			window.__ECSY_DEVTOOLS.refreshStats();
		}.bind(world);

		/*
		world.execute = function() {
			var result = ori1.apply(world, arguments);
			window.__ECSY_DEVTOOLS.refreshStats();
			return result;
		}
		*/

		window.__ECSY_DEVTOOLS.refreshStats = function() {
			const entityManager = world.entityManager;

			const deferredRemoval = {
				enabled: entityManager.deferredRemovalEnabled,
				executeTime: stats.processDeferredRemoval,
				entitiesToRemove: entityManager.entitiesToRemove.length,
				entitiesWithComponentsToRemove: entityManager.entitiesWithComponentsToRemove.length,
				totalComponentsToRemove: entityManager.entitiesWithComponentsToRemove.reduce((a, c) => a + c._ComponentTypesToRemove.length, 0)
			};

			const queries = Object.values(world.entityManager._queryManager._queries).map(q => q.toJSON());

			const systems = world.systemManager._systems.map(system => {
				let data = system.toJSON();
				for (name in data.queries) {
					var query = data.queries[name];
					var queryData = queries.find(q => q.key === query.key);
					query.numEntities = queryData.numEntities;
					query.components = queryData.components;
				}

				return data;
			});

			// Reset time for next step
			// @todo Do it on core?
			world.systemManager._systems.forEach(system => {
				system.executeTime = 0;
			});


			let componentsNum = world.componentsManager.numComponents;
			let components = {};
			for (name in componentsNum) {
				var component = world.componentsManager.Components[name];

				components[name] = {
					count: componentsNum[name],
					type: component.isTagComponent ? 'tag' :
								(component.isComponent ? 'component' :
								'none')
				};
			}

			window.com = components;

			let componentsPools = {};
			for (name in world.componentsManager._componentPool) {
				let pool = world.componentsManager._componentPool[name];
				var cName = pool.T.name;
				componentsPools[cName] = {
					valid: pool.isObjectPool,
					used: pool.totalUsed(),
					free: pool.totalFree(),
					size: pool.totalSize()
				}
			};

			let data = {
				world: {
					enabled: world.enabled
				},
				lastExecutedSystem: world.systemManager.lastExecutedSystem ? world.systemManager.lastExecutedSystem.constructor.name : '',
				numEntities: world.entityManager._entities.length,
				systems: systems,
				queries: queries,
				components: components,
				deferredRemoval: deferredRemoval,
				componentsPools: componentsPools
			};
			sendMessage('refreshData', data);
		}

		sendMessage('worldCreated', {});
	});

	function log() {
		var args = Array.from( arguments );
		 args.unshift( 'background: #9999ff; color: #ffffff;' );
		args.unshift( `%c ECSY Injector ` );

		console.log.apply( console, args );
	}

	// log( 'ECSYInspector injected', document.location.href );

	window.__ECSY_DEVTOOLS_INJECTED = true;
}