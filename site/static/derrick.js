function prepareDerrickPage() {
	member = "derrick"
	$.ajax({
		url: "/load-profile",
		dataType: "json",
		type: "POST",
		data: {"member": member},
		success: function(result){
			loadderrickPage(result);
		}
	});
}

function loadderrickPage(result){

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
				{y: 10, label: "C++"},
				{y: 10, label: "SQL"},
				{y: 10, label: "HTML"},
				{y: 10, label: "CSS"},
				{y: 10, label: "Javascript"},
				{y: 10, label: "Swift"},
				{y: 10, label: "MongoDB"},
				{y: 20, label: "Java"}
			]
		}]
	});
	language_chart.render();
}