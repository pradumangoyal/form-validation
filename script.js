function eduval() {
    var x = document.getElementById("edu").value;
    if(x==="default")
    {
    	    	document.getElementById("edu-error").innerHTML = "*Please Choose a Qualification";
    return false;
    }else{
    	    	document.getElementById("edu-error").innerHTML = "";
return true;
    }

    }
    
    function phoneval() {
   
    var phone = document.getElementById("phone").value;
    var pregex=/^(0|91|\+91){0,1}[\-\s\.]{0,1}[7-9]{1}[0-9]{4}[-\s\.]{0,1}[0-9]{5}$/;
    if(!pregex.test(phone))
    {
    	    	document.getElementById("phone-error").innerHTML = "*Please Enter a Valid Phone Number";
    return false;
    }
    else{
    	    	document.getElementById("phone-error").innerHTML = "";
return true;
    }

    }

    function ageval() {
   
    var age = document.getElementById("age").value;

    var ageregex=/^[1-100]$/;
    if(!ageregex.test(age))
    {
    	    	document.getElementById("age-error").innerHTML = "*Please Enter a Valid Age";
    	    	return false;
    }
    else{
    	    	document.getElementById("age-error").innerHTML = "";
return true;
    }

    }

    function genval() {
   
    var gen = document.getElementById("gender").value;
    var genregex=/^(male|female)$/;
    if(!genregex.test(gen))
    {
    	    	document.getElementById("gender-error").innerHTML = "*Please Enter Your Gender";
    	    	return false;
    }
    else{
    	    	document.getElementById("gender-error").innerHTML = "";
return true;
    }

    }
        function eval() {
   
    var email = document.getElementById("email").value;

    var eregex=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]
{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if(!eregex.test(email))
    {
    	    	document.getElementById("email-error").innerHTML = "*Please Enter a Valid Email-ID";
    return false;
    }
    else{
    	    	document.getElementById("email-error").innerHTML = "";
return true;
    }

    }