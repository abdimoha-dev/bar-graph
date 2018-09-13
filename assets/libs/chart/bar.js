$(document).ready(function () {
	$.ajax({
		type: 'GET',
		url: 'put url link here',
		 
			success: function (data) {
						var postc_html = '';
						$.each(data, function (item, post) {
							demoP.innerHTML = demoP.innerHTML + "post[" + post + "]: " + item + "<br>"; 
//initialize charts here
						});
						$('#thepsts').html(postc_html);
						console.log("AJAX fetched tips posts successfully z!"); 
						
					},
					error: function (request, status, error) {
						// alert(error);
						console.log("FAILED: AJAX failed to fetch tips posts x!"); 
					}
				});
			});
//this is the chart script	
window.onload = function () {
	
var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	
	title:{
		text:"Fortune 500 Companies by Country"

	},
	 axisX:{
  title:"countries",
 },
	axisY2:{
		interlacedColor: "rgba(1,77,101,.2)",
		title:"percentage",
		gridColor: "rgba(1,77,101,.1)",
		title: "Number of Companies"
	},
	data: [{
		type: "bar",
		name: "companies",
		color: "#014D65",
	
		dataPoints: [
			{ y: 3, label: "Sweden" },
			{ y: 7, label: "Taiwan" },
			{ y: 5, label: "Russia" },
			{ y: 9, label: "Spain" },
			{ y: 7, label: "Brazil" },
			{ y: 7, label: "India" },
			{ y: 9, label: "Italy" },
			{ y: 8, label: "Australia" },
			{ y: 11, label: "Canada" },
			{ y: 15, label: "South Korea" },
			{ y: 12, label: "Netherlands" },
			{ y: 15, label: "Switzerland" },

		]
	}]
});
chart.render();
		
		
		
var chart = new CanvasJS.Chart("chartContainers", {
	animationEnabled: true,
	theme: "light2",
	title:{
		text: "Reporting rate for the county"
	},
	axisX:{
		valueFormatString: "#,##0.##",
		crosshair: {
			enabled: true,
			snapToDataPoint: true
		}
	},
	axisY: {
		title: "Number of Visits",
		crosshair: {
			enabled: true
		}
	},
	toolTip:{
		shared:true
	},  
	legend:{
		cursor:"pointer",
		verticalAlign: "bottom",
		horizontalAlign: "left",
		dockInsidePlotArea: true,
		itemclick: toogleDataSeries
	},
		data: [{
		type: "line",
		showInLegend: true,
		name: "Total Visit",
		markerType: "square",
		color: "#F08080",
		dataPoints: [
			{ x: 100, y: 650 },
			{ x: 200, y: 700 },
			{ x: 300, y: 710 },
			{ x: 400, y: 734 },
			{ x: 500, y: 750 },
			{ x: 600, y: 770 },
			{ x: 700, y: 780 },
			{ x: 800, y: 790 },


		]
	},
	{
		type: "line",
		showInLegend: true,
		name: "Unique Visit",
		lineDashType: "dash",
		dataPoints: [
			{ x: 100, y: 510 },
			{ x: 150, y: 560 },
			{ x: 200, y: 580 },
			{ x: 250, y: 590 },
			{ x: 300, y: 600 },
			{ x: 350, y: 659 },
			{ x: 400, y: 670 },
			{ x: 450, y: 680 },
			{ x: 500, y: 690 },
			{ x: 550, y: 700 },
			{ x: 600, y: 710 },
			{ x: 650, y: 730 },
			{ x: 700, y: 800 }
		]
	}]
});
chart.render();

function toogleDataSeries(e){
	if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	} else{
		e.dataSeries.visible = true;
	}
	chart.render();
}

}
//end of chart
