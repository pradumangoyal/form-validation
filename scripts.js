console.log("opened");
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
    console.log(age)
    var ageregex=/^[0-9]{1}[1-9]{1}$/;
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
    console.log(gen);
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

    var eregex=/^([\w-]+(\.[\w-]+)*)@(([\w-]+\.)*\w[\w-])\.([a-z](\.[a-z]{2})?)$/i;
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

    function pval()
    {
    	var pass=document.getElementById("pwd").value;
    	if(pass!=="")
    	{
    		document.getElementById("pwd-error").innerHTML = "";
    	}

    }
    function repval()
    {
    	var pass=document.getElementById("pwd").value;
    	var repass=document.getElementById("r-pwd").value;
    	if(pass==""){
    		document.getElementById("pwd-error").innerHTML = "*Please Enter a Password";
    	}
    	else if(pass!==repass){
    		document.getElementById("rpwd-error").innerHTML = "*Password Doesn't Match";
    	}
    	else{
    		    		document.getElementById("pwd-error").innerHTML = "";
    		    		document.getElementById("rpwd-error").innerHTML = "";
    	}
    }
 
function nameval() {
   
    var name = document.getElementById("name").value;
    var nameregex=/^[A-Za-z\s]{1,}$/i;
    if(!nameregex.test(name))
    {
    	    	document.getElementById("name-error").innerHTML = "*Please Enter a Valid Name";
    return false;
    }
    else{
    	    	document.getElementById("name-error").innerHTML = "";
return true;
    }

    }

    function cityval() {
   
    var name = document.getElementById("city").value;
    var nameregex=/^[A-Za-z\s]{1,}$/i;
    if(!nameregex.test(name))
    {
    	    	document.getElementById("city-error").innerHTML = "*Please Enter a Valid City Name";
    return false;
    }
    else{
    	    	document.getElementById("city-error").innerHTML = "";
return true;
    }

    }