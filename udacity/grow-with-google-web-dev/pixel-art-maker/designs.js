// grid height, grid width, color from color picker
var height, width, color;


// Function creates html code for table rows and cells.
// Height and width are from input values in form.
function makeGrid(height, width) {

	// loop variables
	var i = height, j;
	var tableHtml = "";

	while( i > 0 ){

		tableHtml += "<tr>";

		for (j = 0; j < width; j++) {
			tableHtml += "<td></td>";
		}

		tableHtml += "</tr>";

		i--;

	}

	return tableHtml;

}

// Executes when the submit button is clicked.
$('#submitButton').click(function() {

	$( "form" ).submit(function( event ) {

		// Set height and width to input values.
		height = $("#inputHeight").val();
		width = $("#inputWidth").val();

		// Call makeGrid function. Set html inside #pixelCanvas table to return value from makeGrid function.
		$( "#pixelCanvas" ).html(makeGrid(height, width));

		// Set color value
		color =  $("#colorPicker").val();

		// When a table cell is clicked, set its background color to picked color.
		$("td").on("click", function() {
			$(this).css("background", color);
		});

		event.preventDefault();

	});

});


