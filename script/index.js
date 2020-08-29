function validate(){
	if(document.signupform.firstname.value == ""){ //If Inputs are Empty
		document.getElementById('firstnameErr').innerHTML = "First Name Cannot be empty"; //DISPLAY THE TEXT:
		document.signupform.firstname.focus(); //FOCUS ON FORM INPUT
		document.signupform.firstname.placeholder = ""; //EMPTY PLACEHOLDER
		document.signupform.firstname.style.backgroundImage = "url(./images/icon-error.svg)"; //DISPLAY THIS IMAGE
		document.signupform.firstname.style.backgroundRepeat = "no-repeat";
		document.signupform.firstname.style.backgroundPosition = "right 5% center";
		document.signupform.firstname.style.textIndent = "5px"; //INDENT THE INPUT VALUE/PLACEHOLDER
		document.signupform.firstname.style.outlineColor = "hsl(0, 100%, 74%)"; //CHANGE THE OUTLINE COLOR
		document.signupform.firstname.style.borderColor = "hsl(0, 100%, 74%)"; //CHANGE THE BORDER COLOR
		return false; //DON'T SUBMIT FORM
	}
	else{ //If Inputs are !empty 
		document.getElementById('firstnameErr').innerHTML = ""; //DON'T DISPLAY ERROR MESSAGE
		document.signupform.firstname.style.backgroundImage = "none"; //DON'T DISPLAY BG IMAGE
		document.signupform.firstname.style.textIndent = "0px"; //DON'T INDENT VALUE
		document.signupform.firstname.style.outlineColor = "hsl(220, 50%, 80%)"; //RETAIN OUTLINE COLOR
		document.signupform.firstname.style.borderColor = "hsl(246, 25%, 77%)"; //RETAIN BORDER COLOR
	}
	
	if(document.signupform.lastname.value == ""){
		document.getElementById('lastnameErr').innerHTML = "Last Name Cannot be empty";
		document.signupform.lastname.focus();
		document.signupform.lastname.placeholder = "";
		document.signupform.lastname.style.backgroundImage = "url(./images/icon-error.svg)";
		document.signupform.lastname.style.backgroundRepeat = "no-repeat";
		document.signupform.lastname.style.backgroundPosition = "right 5% center";
		document.signupform.lastname.style.textIndent = "5px";
		document.signupform.lastname.style.outlineColor = "hsl(0, 100%, 74%)";
		document.signupform.lastname.style.borderColor = "hsl(0, 100%, 74%)";
		return false;
	}
	else{
		document.getElementById('lastnameErr').innerHTML = "";
		document.signupform.lastname.style.backgroundImage = "none";
		document.signupform.lastname.style.textIndent = "0px";
		document.signupform.lastname.style.outlineColor = "hsl(220, 50%, 80%)";
		document.signupform.lastname.style.borderColor = "hsl(246, 25%, 77%)";
	}
	
	if(document.signupform.email.value == ""){
		document.getElementById('emailErr').innerHTML = "E-mail Cannot be empty";
		document.signupform.email.focus();
		document.signupform.email.placeholder = "";
		document.signupform.email.style.backgroundImage = "url(./images/icon-error.svg)";
		document.signupform.email.style.backgroundRepeat = "no-repeat";
		document.signupform.email.style.backgroundPosition = "right 5% center";
		document.signupform.email.style.textIndent = "5px";
		document.signupform.email.style.outlineColor = "hsl(0, 100%, 74%)";
		document.signupform.email.style.borderColor = "hsl(0, 100%, 74%)";
		return false;
	}
	
	var emailID = document.signupform.email.value;
	    atpos = emailID.indexOf("@");
		dotpos = emailID.lastIndexOf(".");
	if(atpos < 1 || (dotpos - atpos < 2)){
		document.getElementById('emailErr').innerHTML = "Looks like this is not an email";
		document.signupform.email.focus();
		document.signupform.email.placeholder = "";
		document.signupform.email.style.backgroundImage = "url(./images/icon-error.svg)";
		document.signupform.email.style.backgroundRepeat = "no-repeat";
		document.signupform.email.style.backgroundPosition = "right 5% center";
		document.signupform.email.style.textIndent = "5px";
		document.signupform.email.style.outlineColor = "hsl(0, 100%, 74%)";
		document.signupform.email.style.borderColor = "hsl(0, 100%, 74%)";
		document.signupform.email.style.color = "hsl(0, 100%, 74%)";
		return false;
	}
	else{
		document.getElementById('emailErr').innerHTML = "";
		document.signupform.email.style.backgroundImage = "none";
		document.signupform.email.style.textIndent = "0px";
		document.signupform.email.style.outlineColor = "hsl(220, 50%, 80%)";
		document.signupform.email.style.borderColor = "hsl(246, 25%, 77%)";
		document.signupform.email.style.color = "hsl(249, 10%, 26%)";
	}
	
	if(document.signupform.password.value == ""){
		document.getElementById('passwordErr').innerHTML = "Password Cannot be empty";
		document.signupform.password.focus();
		document.signupform.password.placeholder = "";
		document.signupform.password.style.backgroundImage = "url(./images/icon-error.svg)";
		document.signupform.password.style.backgroundRepeat = "no-repeat";
		document.signupform.password.style.backgroundPosition = "right 5% center";
		document.signupform.password.style.textIndent = "5px";
		document.signupform.password.style.outlineColor = "hsl(0, 100%, 74%)";
		document.signupform.password.style.borderColor = "hsl(0, 100%, 74%)";
		return false;
	}
	
	if(document.signupform.password.value.length < 8){
		document.getElementById('passwordErr').innerHTML = "Minimum Password Length is 8";
		document.signupform.password.focus();
		document.signupform.password.placeholder = "";
		document.signupform.password.style.backgroundImage = "url(./images/icon-error.svg)";
		document.signupform.password.style.backgroundRepeat = "no-repeat";
		document.signupform.password.style.backgroundPosition = "right 5% center";
		document.signupform.password.style.textIndent = "5px";
		document.signupform.password.style.outlineColor = "hsl(0, 100%, 74%)";
		document.signupform.password.style.borderColor = "hsl(0, 100%, 74%)";
		return false;
	}
	else{
		document.getElementById('passwordErr').innerHTML = "";
		document.signupform.password.style.backgroundImage = "none";
		document.signupform.password.style.textIndent = "0px";
		document.signupform.password.style.outlineColor = "hsl(220, 50%, 80%)";
		document.signupform.password.style.borderColor = "hsl(246, 25%, 77%)";
	}
	return ( true ); //SUBMIT THE FORM
}