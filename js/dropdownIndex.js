
// Set function to fire when user selects an option/value
function selectState(countryLoc){

	// Assign a variable to get value of #state
	var city = jQuery('#state').val();

}

// Main
jQuery(document).ready(function(){

	// Prevent default function from running
	event.preventDefault();

	// Disable Select Drop-down menu upon clicking International radio button and enabling upon clicking Local-US radio button
	// Disable drop-down menu
	jQuery('#int').click(function(){
		jQuery('#state').prop('disabled', true);
		jQuery('#state').removeClass('state').addClass('stateDisable');
	})
	// Enable drop-down menu
	jQuery('#loc').click(function(){
		jQuery('#state').prop('disabled', false);
		jQuery('#state').removeClass('stateDisable').addClass('state');
	})

	// Select Drop-down menu
	// Indicate function to get starting value .val() of select tag with id #state
	selectState(jQuery("#state").val());

	// Add options to the <select> menu
		// Create an array with state abbreviations
		var stateCode = (['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY']);
		// Create an array for adding text content in option tags
		var stateName = (['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']);
		// Use a for loop to add values to the <select> menu
		for(var x=0; x<stateCode.length; x++) {
			jQuery('#state').append('<option method="post" value="' + stateCode[x] + '">' + stateName[x] + '</option>');
		}

	// Value will update when user selects an option - use .change()
	jQuery('#state').change(function(){
		// Create variable containing value of #state
		var countryLoc = jQuery(this).val();
		// Launch corresponding function
		selectState(countryLoc);
	})
	
	jQuery('#submit').click(function(){
		event.preventDefault();
		window.open('contact_thanks.html');
		return false;
	})

	// jQuery('#submit').click(function(){
	// 	document.getElementById("#contact").onsubmit = function () {
	//     var x = document.forms["#contact"]["name"].value;
	//     var y = document.forms["#contact"]["email"].value;
	//     var z = document.forms["#contact"]["company"].value;
	//     var p = document.forms["#contact"]["projectDescription"].value;

	//     var submit = true;

	//     if (x == null || x == "") {
	//         nameError = "Please enter your name";
	//         document.getElementById("name_error").innerHTML = nameError;
	//         submit = false;
	//     }

	//     if (y == null || y == "") {
	//         emailError = "Please enter your email";
	//         document.getElementById("email_error").innerHTML = emailError;
	//         submit = false;
	//     }

	//     if (z == null || z == "") {
	//         telephoneError = "Please enter your company name";
	//         document.getElementById("company_error").innerHTML = telephoneError;
	//         submit = false;
	//     }

	//     if (p == null || p == "") {
	//         telephoneError = "Please enter your project description";
	//         document.getElementById("projectDescription_error").innerHTML = telephoneError;
	//         submit = false;
	//     }

	//     return submit;

	// 	}

	// 	function removeWarning() {
	// 	    document.getElementById(this.id + "_error").innerHTML = "";
	// 	}

	// 	document.getElementById("name").onkeyup = removeWarning;
	// 	document.getElementById("email").onkeyup = removeWarning;
	// 	document.getElementById("telephone").onkeyup = removeWarning;
	// })


})