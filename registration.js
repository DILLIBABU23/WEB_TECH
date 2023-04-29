function adddata()
{
    var getemail=document.getElementById('email').value;
    var getpassword=document.getElementById('pwd').value;

    /*another way of storing the details
    
    localStorage.setItem=('useremail',getemail)
    localStorage.setItem=('userpwd',getpassword)*/
    localStorage.useremail=getemail;
    localStorage.userpwd=getpassword;
}