// function arraySort(array) {
// 	var newArray = array.sort();
// 	return newArray;
// }

// var dogArray = ["Bulldog", "Pekingese", "Mastiff", "Poodle"];

// console.log(arraySort(dogArray));

// function buildArray(array) {
// 	var newBuild = [];
// 	for (var i = 0; i < array.length; i++) {
// 		if (array[i] > 25) {
// 			newBuild.push(array[i]);
// 		}
// 	}
// 	return newBuild;
// }

// var numArray = [1, 5, 6, 20];

// console.log(buildArray(numArray);

// var clickBtn = document.getElementById("click");


var buttonResults = function () {
	var textValue = document.getElementById("nums").value;
	var newString = textValue.split(",");
	var built = buildArray(newString);
	var sorted = sortArray(built);
	var outputDiv = document.getElementById("output");
	var output = "";
	console.log(sorted);
	
	for (var i = 0; i < sorted.length; i++) {
		 output += "<div class='number'>" + sorted[i] + "</div>";
	}
		outputDiv.innerHTML = output;
}

function buildArray(array) {
	var newArray = [];
	for(var i = 0; i < array.length; i++) {
		if (array[i] > 25) {
			newArray.push(array[i]);
		}
	}
	return newArray;
}

function sortArray(array) {
	var sortedArray = array.sort();
	return sortedArray;
}

var clickBtn = document.getElementById("click");

clickBtn.onclick = buttonResults;



