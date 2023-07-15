function validateform(){  
    var name=document.regform.name.value;  
    var password=document.regform.password.value;  
    var password2=document.regform.password2.value;
    var email=document.regform.email.value;  
    var atposition=email.indexOf("@");  
    var dotposition=email.lastIndexOf(".");  
    var username=document.regform.username.value;  
    var num=document.regform.num.value;
    
    if (name==null || name==""){  
      alert("Name can't be blank");  
      return false;  
    }
  
    if (username.length<6)
    {
      alert("username cant be less than 6 characters");
      return false;
    }
    if (password == "") {
            alert("Please enter your password");
            password.focus();
            return false;
        }
    
    if(password != password2){
      alert("Password mismatch");
            return false;
    }
    if(password.length!= ""){
           var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;                
            if(regex.test(password) === false) 
            {    alert("Please enter a valid pwd");
            return false;
        }       
    }
     
    if (email==null || email==""){  
      alert("email can't be blank");  
        return false; }
  
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length){  
      alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
      return false;  
      }  
  
  
    if(num.length>10 || num.length<10)
    {
      alert("enter valid phone number");
      return false;
    }
     
    if (isNaN(num)){  
     alert("enter numerical value");
      return false;  
    }else{  
      return true;  
      }  
}
	function moveone()
	{
	document.getElementById("move").innerHTML ="Your Gym";
	}
  window.addEventListener( "load", start, false );	
	function start()
	{
	document.getElementById("picture").addEventListener("mouseover", over, false );
	document.getElementById("picture").addEventListener("mouseout", out, false );
	}

	function over()
	{
	 document.getElementById("picture").setAttribute( "src", "blog-5.jpg");
	}

	function out()
	{
	document.getElementById("picture").setAttribute( "src", "blog-6.jpg");
	}
  window.addEventListener( "load", start2, false );
  function start2()
{
document.getElementById("fname").addEventListener("focus",focusone, false );
}
function focusone() 
{
  document.getElementById("help").innerHTML="Enter name" ;
}

       