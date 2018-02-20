$(document).ready(function(){

	var inputTextField, textEntered, textEntered2, outputContainer, errorContainer, resetButton, errorDisplayed, resultDisplayed, resultError, result;

	inputTextField = $("#textField");
	outputContainer = $("#outputContainer");
	errorContainer = $("#errorContainer");
	resetButton = $("#resetButton");
	result = $("#result");
	resultError = $("#resultError");


	// check to see if string is a palindrome
	function confirmEnding(str, target) {

	    /*
	    get length of original string target
	    get length of target string
	    get substring start position and count back from end of str this many indices
	    save this substring in a new variable called test
	    check to see if test matches target
	    */

	    var lengthOfOrginalString = str.length;
	    var lengthOfTargetString = target.length;
	    var substringStartPostion = (lengthOfOrginalString - lengthOfTargetString);
	    var test = "";

	    test = str.substr(substringStartPostion, lengthOfTargetString);

	    if ( test == target ){
	    	return true;
	    } else {
	    	return false;
	    }

	};





	$("#myForm").submit(function( event ){

		// get value entered in input text field and remove whitspace from beginning and end of string
		textEntered = jQuery.trim($('#textField').val());
		textEntered2 = jQuery.trim($('#textField2').val());

		// if no value or white space or a number entered, then show error
		if ((textEntered.length == 0) || (textEntered2.length == 0) || (Math.floor(textEntered) == textEntered && $.isNumeric(textEntered))) {
			// if result was shown, turn it off
			if (resultDisplayed) {
				outputContainer.addClass("d-none");
				resultDisplayed = 0;
			}
			// show error message
			errorContainer.removeClass("d-none");
			resultError.html("<strong>Error:</strong> Please review the instructions.");
			errorDisplayed = 1;
		} else {
			// if error message was shown, turn it off
			if (errorDisplayed) {
				errorDisplayed = 0;
				errorContainer.addClass("d-none");
			}
			// reverse string entered
			var containsTarget  = confirmEnding(textEntered, textEntered2);


			if (containsTarget) {
				containsTarget = "The string ends with that target."
			} else {
				containsTarget = "The string does not end with that target."
			}



			// display result
			outputContainer.removeClass("d-none");

			// use ternary operator to display correct meesage
			result.html("<strong>Result:</strong> " + containsTarget);
			// show reset button
			resetButton.removeClass("d-none");
			resultDisplayed = 1;
		}

		event.preventDefault();

	});

});