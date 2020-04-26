function prepareAndrewPage() {
	var member = "andrew";
	$.ajax({
		url: "/load-profile",
		dataType: "json",
		type: "POST",
		data: {"member": member},
		success: function(result){
			loadAndrewPage(result);
		}
	});

	$.ajax({
		url: "/andrews-genre-data",
		dataType: "json",
		type: "POST",
		//data: {"Genre": Genre},
		dataType: 'json',
		success: function(result){
			//console.log(result);
			loadGenreChart(result);
		}
	});
}

function loadAndrewPage(result){

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
					{y: 20, label: "Java"}
				]
			}]
		});
		language_chart.render();
}

function loadGenreChart(result){
	var array = result.split(',');
	//console.log(array)
	var array2 = []
	String.prototype.replaceAll = function(str1, str2, ignore) 
	{
		return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
	}
	for(i = 0; i < array.length; i++){
		var temp_array = array[i].split(':');
		//console.log(temp_array[0]);
		//console.log(temp_array[1]);

		if(temp_array[0].includes("{","}",'"') || temp_array[1].includes("{","}",'"') ){
			temp_array[0] = temp_array[0].replaceAll('{', ''); 
			temp_array[0] = temp_array[0].replaceAll('}', '');
			temp_array[0] = temp_array[0].replaceAll('"', ''); 
			temp_array[1] = temp_array[1].replaceAll('{', ''); 
			temp_array[1] = temp_array[1].replaceAll('}', ''); 
			temp_array[1] = temp_array[1].replaceAll('"', '');
		}

		array2.push(temp_array[0]);
		array2.push(temp_array[1]);
	}
	array2[35] = array2[35].substring(0, array2[35].length - 1);
	//console.log(array2[35])

	//console.log(array2)
	var genre_chart = new CanvasJS.Chart("GenreChartContainer", {
			animationEnabled: true,
			title: {
				text: "Genre Breakdown"
			},
			data: [{
				type: "pie",
				startAngle: 240,
				yValueFormatString: "##0\"%\"",
				indexLabel: "{label}",
				dataPoints: [
					{y: array2[1], label: array2[0]},
					{y: array2[3], label: array2[2]},
					{y: array2[5], label: array2[4]},
					{y: array2[7], label: array2[6]},
					{y: array2[9], label: array2[8]},
					{y: array2[11], label: array2[10]},
					{y: array2[13], label: array2[12]},
					{y: array2[15], label: array2[14]},
					{y: array2[17], label: array2[16]},
					{y: array2[19], label: array2[18]},
					{y: array2[21], label: array2[20]},
					{y: array2[23], label: array2[22]},
					{y: array2[25], label: array2[24]},
					{y: array2[27], label: array2[26]},
					{y: array2[29], label: array2[28]},
					{y: array2[31], label: array2[30]},
					{y: array2[33], label: array2[32]},
					{y: array2[35], label: array2[34]}		
				]
			}]
		});
		genre_chart.render();
}