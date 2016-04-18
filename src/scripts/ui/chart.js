import ChartJS from 'chart.js'

export class Chart {	
	chartJSDatasetForType(type) {
		const colors = this.colors[type];
		let result = {
			data: [],
			backgroundColor: [],
			label: type
		}

		for(let color of colors.__keys) {
			result.data.push(1)
			result.backgroundColor.push(color)
		}

		return result;
	}

	chartJSDataFromColors(type) {
		return {
			datasets: [this.chartJSDatasetForType(type)],
			labels: []
		};
	}

	onColorSetChange(setName) {
		this.setName = setName;
		this.chart.config.data = this.chartJSDataFromColors(setName);
		this.chart.update();
	}

	constructor(colors, defaultSetName) {
		this.colors = colors;
		this.setName = defaultSetName;
		this.chart = this.createChart();
		notificationCenter.subscribeListener('on-color-set-change', this.onColorSetChange.bind(this), 'c-on-color-set-change')
	}

	createChart() {
		var ctx = document.getElementById("chart-area").getContext("2d");
		var config = {
	        type: 'doughnut',
	        data: this.chartJSDataFromColors(this.setName),
		        options: {
		        	tooltips: {
		        		enabled: false
		        	},
		        	elements: {
		        		arc: {
		        			borderWidth: 0
		        		}
		        	}
		        }
		}
		return new ChartJS(ctx, config);
	}
}
