function prepareJustinPage() {
	member = "justin"
	$.ajax({
		url: "/load-profile",
		dataType: "json",
		type: "POST",
		data: {"member": member},
		success: function(result){
			loadJustinPage(result);
		}
	});
}

function loadJustinPage(result){

	hide_all();
	$('#footer-section').fadeIn('slow');
	$("#profile").html("");
	$("#profile").html(result);
	$("#profile").fadeIn("Slow");



	var language_chart = new CanvasJS.Chart("LanguagePieChartContainer", {
		animationEnabled: true,
		title: {
			text: "Technical Skills"
		},
		data: [{
			type: "pie",
			startAngle: 240,
			yValueFormatString: "##0\"%\"",
			indexLabel: "{label}",
			dataPoints: [
				{y: 10, label: "Python"},
				{y: 20, label: "C++"},
				{y: 5, label: "SQL"},
				{y: 5, label: "HTML"},
				{y: 5, label: "CSS"},
				{y: 5, label: "Javascript"},
				{y: 5, label: "Swift"},
				{y: 5, label: "MongoDB"},
				{y: 5, label: "Java"},
				{y: 20, label: "Qiskit"},
				{y: 5, label: "Ruby"},
				{y: 10, label: "Xilinx_ISE"},
			]
		}]
	});
	language_chart.render();
}