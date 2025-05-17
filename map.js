// 1. Load the layer‐definitions
fetch('map-layers.json')
	.then(res => res.json())
	.then(config => {

	// 2. Sort by order
	config.sort((a, b) => a.order - b.order);

	// 3. Prepare containers
	const baseMaps = {};
	const overlayMaps = {};

	// 4. Instantiate each layer
	config.forEach(cfg => {
		// imageOverlay layers: L.imageOverlay(url, bounds, options)
		const layer = L.imageOverlay(cfg.url, cfg.bounds, cfg.options || {});
		// add to the correct collection
    	if (cfg.type === 'base') {
			baseMaps[cfg.title] = layer;
		} else {
			overlayMaps[cfg.title] = layer;
		}
	});

	// 5. Initialize map
	const map = L.map('map', {
		layers: Object.values(baseMaps),  // add all base layers initially (or pick defaults)
		crs: L.CRS.Simple,
		minZoom: -5, 
		maxZoom: 5, 
		zoomDelta: 1, 
		zoomSnap: 0,
		attributionControl: false
    });

	// 6. Fit to your default bounds
	map.fitBounds([[-3000, -3000], [3000, 3000]]);

	// 7. Add UI controls
	L.control.scale({ 
		metric: true, 
		imperial: true, 
		maxWidth: 320 
	}).addTo(map);
	L.control.layers(baseMaps, overlayMaps).addTo(map);
})

	.catch(err => console.error('Failed loading layer config:', err));
