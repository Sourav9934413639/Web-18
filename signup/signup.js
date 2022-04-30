
localStorage.setItem("EMAIL","sourav9934413639@gmail.com");
localStorage.setItem("PASSWORD","Osho@123");
localStorage.setItem("Count",0);

document.querySelector("#form_fill").addEventListener("submit",myFunction);
function myFunction()
{
    event.preventDefault();
    var x=localStorage.getItem("EMAIL");
    var y=localStorage.getItem("PASSWORD");
    var z=localStorage.getItem("Count")
var u_name=form_fill.name.value;
var emailId=form_fill.email.value;
var pass=form_fill.password.value;
if((emailId==x)&&(pass==y))
{
    z++;
    alert("Login Successful");
    if(z>0)
    {    
        
        document.querySelector("#clickme").value="Log In";
    }
    
}
else{
    alert("Wrong Credentials");
}

}