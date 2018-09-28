function E-mail() {
	var a = document.myForm.Email.value;     // chandasai@gmail.com
	if(a.indexOf('@')<=0) {   //@gmail.com
		document.getElementById("Message").innerHTML ="Invalid @ position ";
		return false;
	}
	//thapa@gmail.com  
	if(a.charAt(a.length-4)!='.') {
		document.getElementById("Message").innerHTML ="Invalid . position ";
		return false;
	}
	//thapa@gmail.co
	if(a.charAt(a.length-3)!='.') {
		document.getElementById("Message").innerHTML ="Invalid . position ";
		return false;
	}
	

}

