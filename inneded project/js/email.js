<form name="myForm" onsubmit="return E-mail()">
Email: <input type="text" name="Email" value="">
<span id="Message"> </span>
<br>
<input type="submit" value="Submit"> 
</form>
</body>

<script>
function E-mail() {
	var a = document.myForm.Email.value;     // chandasai121@gmail.com
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
