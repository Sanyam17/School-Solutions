function index()
{
	document.getElementById('login-box').style.display='none';
    document.getElementById('signup-box').style.display='block';
    document.getElementById('password-box').style.display='none';
    document.getElementById('dash').style.display='none';
}

function password()
{
	document.getElementById('login-box').style.display='none';
    document.getElementById('signup-box').style.display='none';
    document.getElementById('password-box').style.display='block';
    document.getElementById('dash').style.display='none';
}

function dash()
{
	document.getElementById('login-box').style.display='none';
    document.getElementById('signup-box').style.display='none';
    document.getElementById('password-box').style.display='none';
    document.getElementById('dash').style.display='block';
}