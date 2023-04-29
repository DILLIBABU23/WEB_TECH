function checkdata()
{
    var gmail=document.getElementById('email').value;
    var pass=document.getElementById('pwd').value;
    var getgmail=localStorage.getItem('useremail');
    var getpassword=localStorage.getItem('userpwd');
    if(gmail==getgmail)
    {
        if(pass==getpassword)
        {
            alert('succes');
        }
        else{
            alert('password error');
        }
    }
    else{
        alert('invali details');
    }
}