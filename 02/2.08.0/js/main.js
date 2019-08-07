/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.8 - Activity: Your first visualization!
*/

(async () => {
	const data = await d3.json('data/buildings.json');
	const svg = d3.select('#chart-area').append('svg')
		.attr('width', 500)
		.attr('height', 500)

	const rects = svg.selectAll('rect')
		.data(data);

	rects.enter()
		.append('rect')
			.attr('width', 45)
			.attr('height', (d) => d.height)
			.attr('x', (d, i) => i * 65)
			.attr('fill', 'grey');
})();