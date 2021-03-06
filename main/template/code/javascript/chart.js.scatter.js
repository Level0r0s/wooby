

	// RANDOM

	var randomScalingFactor = function() {
		return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100);
	};
	var randomColor = function(opacity) {
		return 'rgba(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + (opacity || '.3') + ')';
	};
		
	// DATA		
	
	var scatterChartData = {
		datasets: [{
			label: "My First dataset",
			data: [{
				x: randomScalingFactor(),
				y: randomScalingFactor(),
			}, {
				x: randomScalingFactor(),
				y: randomScalingFactor(),
			}, {
				x: randomScalingFactor(),
				y: randomScalingFactor(),
			}, {
				x: randomScalingFactor(),
				y: randomScalingFactor(),
			}, {
				x: randomScalingFactor(),
				y: randomScalingFactor(),
			}, {
				x: randomScalingFactor(),
				y: randomScalingFactor(),
			}, {
				x: randomScalingFactor(),
				y: randomScalingFactor(),
			}]
		}, {
			label: "My Second dataset",
			data: [{
				x: randomScalingFactor(),
				y: randomScalingFactor(),
			}, {
				x: randomScalingFactor(),
				y: randomScalingFactor(),
			}, {
				x: randomScalingFactor(),
				y: randomScalingFactor(),
			}, {
				x: randomScalingFactor(),
				y: randomScalingFactor(),
			}, {
				x: randomScalingFactor(),
				y: randomScalingFactor(),
			}, {
				x: randomScalingFactor(),
				y: randomScalingFactor(),
			}, {
				x: randomScalingFactor(),
				y: randomScalingFactor(),
			}]
		}]
	};

	$.each(scatterChartData.datasets, function(i, dataset) {
		dataset.borderColor = randomColor(0.4);
		dataset.backgroundColor = randomColor(0.1);
		dataset.pointBorderColor = randomColor(0.7);
		dataset.pointBackgroundColor = randomColor(0.5);
		dataset.pointBorderWidth = 1;
	});

	// ******************************************************** CHART 
	
	var _canvasc = document.getElementById("_canvasc")
	_canvasc.width  	= $("#_canvasp").width(); 
	_canvasc.height 	= $("#_canvasp").height(); 
	var _ctxc = _canvasc.getContext("2d");
	
	window.myScatter = Chart.Scatter( _ctxc, {
		data: scatterChartData,
		options: {
			title: {
				display: true,
				text: 'Chart.js Scatter Chart'
			},
			scales: {
				xAxes: [{
					position: 'top',
					gridLines: {
						zeroLineColor: "rgba(0,255,0,1)"
					},
					scaleLabel: {
						display: true,
						labelString: 'x axis'
					}
				}],
				yAxes: [{
					position: 'right',
					gridLines: {
						zeroLineColor: "rgba(0,255,0,1)"
					},
					scaleLabel: {
						display: true,
						labelString: 'y axis'
					}
				}]
			}
		}
	});

