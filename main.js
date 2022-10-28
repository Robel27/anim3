function startClassification() {
	navigator.mediaDevices.getUserMedia({ audio: true});
	classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/2ff5rIj5T/model.json', modelReady);
}

function modelReady(){
	classifier.classify(gotResults);
}

function gotResults(error, results) {
	if (error) {
		console.error(error);
	} else {
		console.log(results);
		random_number_r = Math.floor(Math.random() * 225) + 1;
		random_number_g = Math.floor(Math.random() * 225) + 1;
		random_number_b = Math.floor(Math.random() * 225) + 1;

		document.getElementById("result_label1").innerHTML = 'Deteced Dog - '+ results[0].label;
		document.getElementById("result_label2").innerHTML = 'Deteced Cat - '+ results[0].label;
		document.getElementById("result_label3").innerHTML = 'Deteced Lion - '+ results[0].label;
		document.getElementById("result_label4").innerHTML = 'Deteced Cow - '+ results[0].label;
		document.getElementById("result_confidence").innerHTML = 'Detected voice is of - '+ (results[0]. confidence*100).toFixed(2)+" %";
		document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
		document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

		img = document.getElementById('dog')
		img1 = document.getElementById('cat')
		img2 = document.getElementById('lion')
		img3 = document.getElementById('cow')

		if (results[0].label == "Barking") {
			img.src = 'dog.png';
		} else if (results[0].label == "Meowing") {
			img1.src = 'cat.png';
		} else if (results[0].label == "Roaring") {
			img2.src = 'lion.png';
		} else {
			img3.src = 'cow.png';
		}
	}
}