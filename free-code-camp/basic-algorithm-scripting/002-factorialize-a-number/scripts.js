$(document).ready(function(){

	var inputTextField, textEntered, outputContainer, errorContainer, resetButton, errorDisplayed, resultDisplayed, resultError, result, isFloat;

	inputTextField = $("#textField");
	outputContainer = $("#outputContainer");
	errorContainer = $("#errorContainer");
	resetButton = $("#resetButton");
	result = $("#result");
	resultError = $("#resultError");


	// factorialize number sent in from input field
	function factorialize(num) {

		var factorial = 1;

		for (i = 1; i <= num; i++){
			factorial  *= i;
		}

		return factorial;
	}

	// show error message
	function showErrorMessage(){

		if (resultDisplayed) {
			outputContainer.addClass("d-none");
			resultDisplayed = 0;
		}
			// show error message
			errorContainer.removeClass("d-none");
			resultError.html("<strong>Error:</strong> Please enter an integer greater than 0 into the field below.");
			errorDisplayed = 1;
			return;
		}





		$("#myForm").submit(function( event ){

		// get value entered in input text field and remove whitspace from beginning and end of string
		textEntered = jQuery.trim($(inputTextField).val());

		// check to see if value entered is a number and is greater than 0
		if ( (Math.floor(textEntered) == textEntered && $.isNumeric(textEntered)) && (textEntered > 0) ){

				// check to see if number is an integer
				if (textEntered % 1 == 0) {
					textEntered = parseInt(textEntered);
					// if error message was shown, turn it off
					if (errorDisplayed) {
						errorDisplayed = 0;
						errorContainer.addClass("d-none");
					}
				// factorialize the number entered
				textEntered = factorialize(textEntered);
				// display result
				outputContainer.removeClass("d-none");
				result.html("<strong>Result:</strong> " + textEntered);
				// show reset button
				resetButton.removeClass("d-none");
				resultDisplayed = 1;
			} else {
				// show error message if number is not an integer
				showErrorMessage();
			}

		} else {
			// show error message if value entered was not a number
			showErrorMessage();
		}

		event.preventDefault();
	});

	});