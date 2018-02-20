$(document).ready(function(){

	var inputTextField, textEntered, outputContainer, errorContainer, resetButton, errorDisplayed, resultDisplayed, resultError, result, isFloat;

	inputTextField = $("#textField");
	outputContainer = $("#outputContainer");
	errorContainer = $("#errorContainer");
	resetButton = $("#resetButton");
	result = $("#result");
	resultError = $("#resultError");


	// find the largest value in each sub array
	function largestOfFour(arr) {

		var subArray = [];
		var finalArray = [];
		var greatestNumber;

		for (var i = 0; i < arr.length; i++)
		{
			// get first sub array
			subArray = arr[i];
			greatestNumber = 0;

			// loop through sub array and find largest number in that sub array
			for (var j=0; j<subArray.length; j++)
			{
				if (subArray[j] > greatestNumber){
					greatestNumber = subArray[j];
				}
			}

			// add largest number to final array
			finalArray[i] = greatestNumber;
		}

		return finalArray;
	}




	$("#myForm").submit(function( event ){

			// get value entered in input text field and remove whitspace from beginning and end of string
			textEntered = jQuery.trim($(inputTextField).val());

			// use JSON.parse to parse string array to JS array
			textEntered = JSON.parse(textEntered);

			// find the largest numbers in each of the arrays provided
			textEntered = largestOfFour(textEntered);

			// display result
			outputContainer.removeClass("d-none");
			result.html("<strong>Result:</strong> " + textEntered);

			// show reset button
			resetButton.removeClass("d-none");
			resultDisplayed = 1;

			event.preventDefault();
		});

});