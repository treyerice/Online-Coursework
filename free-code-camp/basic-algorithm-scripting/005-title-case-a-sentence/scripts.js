$(document).ready(function(){

	var inputTextField, textEntered, outputContainer, errorContainer, resetButton, errorDisplayed, resultDisplayed, resultError, result;

	inputTextField = $("#textField");
	outputContainer = $("#outputContainer");
	errorContainer = $("#errorContainer");
	resetButton = $("#resetButton");
	result = $("#result");
	resultError = $("#resultError");


	// title case a string
	function titleCase(str) {



		// make entire string lower case
		var myString = str.toLowerCase();
		// split words in string into array elements
		var myArray = myString.split(" ");
		// find last array element
		var last = myArray[myArray.length - 1];
		var capArrayValue = "";
		var finalString = "";


		for (var i=0; i < myArray.length; i++)
		{
			// capitalize first character of array element
			capArrayValue = myArray[i].charAt(0).toUpperCase() + myArray[i].slice(1);

			if (myArray[i] == last) {
				finalString = finalString.concat(capArrayValue);
			}
			else{
				capArrayValue += " ";
				finalString = finalString.concat(capArrayValue);
			}

		}


		return finalString;
	}




	$("#myForm").submit(function( event ){

		// get value entered in input text field and remove whitspace from beginning and end of string
		textEntered = jQuery.trim($(inputTextField).val());

		// if no value or white space entered, then show error
		if ((textEntered.length == 0) || (Math.floor(textEntered) == textEntered && $.isNumeric(textEntered))) {
			// if result was shown, turn it off
			if (resultDisplayed) {
				outputContainer.addClass("d-none");
				resultDisplayed = 0;
			}
			// show error message
			errorContainer.removeClass("d-none");
			resultError.html("<strong>Error:</strong> Please enter a sentence into the field below.");
			errorDisplayed = 1;
		} else {
			// if error message was shown, turn it off
			if (errorDisplayed) {
				errorDisplayed = 0;
				errorContainer.addClass("d-none");
			}
			// reverse string entered
			console.log(textEntered);
			textEntered = titleCase(textEntered);
			// display result
			outputContainer.removeClass("d-none");
			result.html("<strong>Result:</strong> " + textEntered);
			// show reset button
			resetButton.removeClass("d-none");
			resultDisplayed = 1;
		}

		event.preventDefault();

	});

});