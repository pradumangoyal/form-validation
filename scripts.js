console.log("opened");
function eduval() {
    var x = document.getElementById("edu").value;
    if(x==="default")
    {
    	    	document.getElementById("edu-error").innerHTML = "<img src='./wrong.png' style='width: 20px; height: 20px;'>Please Choose a Qualification";
    return false;
    }else{
    	    	document.getElementById("edu-error").innerHTML = "<img src='./correct.png' style='width: 20px; height: 20px;'>";
return true;
    }

    }
    
    function phoneval() {
   
    var phone = document.getElementById("phone").value;
    var pregex=/^(0|91|\+91){0,1}[\-\s\.]{0,1}[7-9]{1}[0-9]{4}[-\s\.]{0,1}[0-9]{5}$/;
    if(!pregex.test(phone))
    {
    	    	document.getElementById("phone-error").innerHTML = "<img src='./wrong.png' style='width: 20px; height: 20px;'>Please Enter a Valid Phone Number";
    return false;
    }
    else{
    	    	document.getElementById("phone-error").innerHTML = "<img src='./correct.png' style='width: 20px; height: 20px;'>";
return true;
    }

    }

    function ageval() {
   
    var age = document.getElementById("age").value;
    console.log(age)
    var ageregex=/^[0-9]{1}[1-9]{1}$/;
    if(!ageregex.test(age))
    {
    	    	document.getElementById("age-error").innerHTML = "<img src='./wrong.png' style='width: 20px; height: 20px;'>Please Enter a Valid Age";
    	    	return false;
    }
    else{
    	    	document.getElementById("age-error").innerHTML = "<img src='./correct.png' style='width: 20px; height: 20px;'>";
return true;
    }

    }

    function genval() {
   
    var gen = document.getElementById("gender").value;
    console.log(gen);
    var genregex=/^(male|female)$/;
    if(!genregex.test(gen))
    {
    	    	document.getElementById("gender-error").innerHTML = "<img src='./wrong.png' style='width: 20px; height: 20px;'>Please Enter Your Gender";
    	    	return false;
    }
    else{
    	    	document.getElementById("gender-error").innerHTML = "<img src='./correct.png' style='width: 20px; height: 20px;'>";
return true;
    }

    }

           function eval() {
   
    var email = document.getElementById("email").value;

    var eregex=/^([\w-]+(\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,})\.([a-z]{2,}(\.[a-z]{2})?)$/i;
    if(!eregex.test(email))
    {
    	    	document.getElementById("email-error").innerHTML = "<img src='./wrong.png' style='width: 20px; height: 20px;'>Please Enter a Valid Email-ID";
    return false;
    }
    else{
    	    	document.getElementById("email-error").innerHTML = "<img src='./correct.png' style='width: 20px; height: 20px;'>";
return true;
    }

    }

    function pval()
    {
    	var pass=document.getElementById("pwd").value;
    	if(pass!=="")
    	{
    		document.getElementById("pwd-error").innerHTML = "<img src='./correct.png' style='width: 20px; height: 20px;'>";
    	}

    }
    function repval()
    {
    	var pass=document.getElementById("pwd").value;
    	var repass=document.getElementById("r-pwd").value;
    	if(pass==""){
    		document.getElementById("pwd-error").innerHTML = "<img src='./wrong.png' style='width: 20px; height: 20px;'>Please Enter a Password";
    	}
    	else if(pass!==repass){
            document.getElementById("pwd-error").innerHTML = "<img src='./wrong.png' style='width: 20px; height: 20px;'>";
    		document.getElementById("rpwd-error").innerHTML = "<img src='./wrong.png' style='width: 20px; height: 20px;'>Password Doesn't Match";
    	}
    	else{
    		    		document.getElementById("pwd-error").innerHTML = "<img src='./correct.png' style='width: 20px; height: 20px;'>";
    		    		document.getElementById("rpwd-error").innerHTML = "<img src='./correct.png' style='width: 20px; height: 20px;'>";
    	}
    }
 
function nameval() {
   
    var name = document.getElementById("name").value;
    var nameregex=/^[A-Za-z\s]{1,}$/i;
    if(!nameregex.test(name))
    {
    	    	document.getElementById("name-error").innerHTML = "<img src='./wrong.png' style='width: 20px; height: 20px;'>Please Enter a Valid Name";
    return false;
    }
    else{
    	    	document.getElementById("name-error").innerHTML = "<img src='./correct.png' style='width: 20px; height: 20px;'>";
return true;
    }

    }

    function cityval() {
   
    var name = document.getElementById("city").value;
    var nameregex=/^[A-Za-z\s]{1,}$/i;
    if(!nameregex.test(name))
    {
    	    	document.getElementById("city-error").innerHTML = "<img src='./wrong.png' style='width: 20px; height: 20px;'>Please Enter a Valid City Name";
    return false;
    }
    else{
    	    	document.getElementById("city-error").innerHTML = "<img src='./correct.png' style='width: 20px; height: 20px;'>";
return true;
    }

    }