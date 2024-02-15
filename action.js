function onEmail()
{
    var email = document.getElementById('email').value;
alert("This is your Email: " + email);
}

function onPass()
{
    var pass = document.getElementById('password').value;
 alert("This is your Password: " + pass);
}

function onNum()
{
    var num = document.getElementById('number').value;
alert("This is your Number: " + num);
}
function onSelect()
{
    var sel = document.getElementById('country').value;
alert("This is your Country: " + sel);
}

function onButton()
{
    
    event.preventDefault();
    var data = document.getElementById("logg");
    console.log(data.value);

}
