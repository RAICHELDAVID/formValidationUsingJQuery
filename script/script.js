$(document).ready(function () {
	$('#myForm').submit(function (event) {
		var hasError = false;
		var firstName = $('#firstName').val();
		var lastName = $('#lastName').val();
		var address = $('#address').val();
		var mobileNumber = $('#mobileNumber').val();
		var emailID = $('#emailID').val();
		var password = $('#password').val();
		var confirmPassword = $('#confirmPassword').val();
		$('.error').remove();
		if (firstName.length < 1) {
			$('#firstName').after('<span class="error">firstname is required</span>');
			hasError = true;
		} else {
			var regularExpression = /^[A-Za-z]+$/;
			var validFirstName = regularExpression.test(firstName);
			if (!validFirstName) {
				$('#firstName').after('<span class="error">Invalid firstname</span>');
				hasError = true;
			}

		}
		if (lastName.length < 1) {
			$('#lastName').after('<span class="error">lastname is required</span>');
			hasError = true;
		} else {
			var regularExpression = /^[A-Za-z]+$/;
			var validLastName = regularExpression.test(lastName);
			if (!validLastName) {
				$('#lastName').after('<span class="error">Invalid lastname</span>');
				hasError = true;
			}

		}
		if (address.length < 1) {
			$('#address').after('<span class="error">address is required</span>');
			hasError = true;
		}
		if (mobileNumber.length < 1) {
			$('#mobileNumber').after('<span class="error">mobilenumber is required</span>');
			hasError = true;
		} else {
			var regularExpression = /^\d{10}$/;
			var validMobileNumber = regularExpression.test(mobileNumber);
			if (!validMobileNumber) {
				$('#mobileNumber').after('<span class="error">Invalid mobile number</span>');
				hasError = true;
			}

		}
		if (emailID.length < 1) {
			$('#emailID').after('<span class="error">email is required</span>');
			hasError = true;
		} else {
			var regularExpression = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,3}$/;
			var validEmail = regularExpression.test(emailID);
			if (!validEmail) {
				$('#emailID').after('<span class="error">Invalid format</span>');
				hasError = true;
			}
		}

		var regularExpressionForPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
		var validPassword = regularExpressionForPassword.test(password);
		if (!validPassword) {
			$('#password').after('<span class="error">Password must contain at least one uppercase letter, one lowercase letter, one number, one special character (@$!%*?&), and be at least 8 characters long</span>');
			hasError = true;
		}
		if (password !== confirmPassword) {
			$('#confirmPassword').after('<span class="error">Incorrect password </span>');
			hasError = true;
		}
		if (hasError) {
			event.preventDefault();

		} else {

			this.submit();
		}


	});
});