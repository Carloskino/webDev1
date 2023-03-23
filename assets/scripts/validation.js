function validateForm()
{
    //alert('Validate Function called successfully');

    var errors = "";
    //Get value of element and storing it in variable
    var fullName = document.getElementById('fullName').value;
    var password = document.getElementById('password').value;
    var nationality = document.getElementById('nationality').value;
    var username = document.getElementById('username').value;

    //Check if fullName varible is empty
    if(fullName=="")
    {
        /*
        alert("Please enter or select Data.");
        return false;
        */
        errors += "<li>Enter Full Name.</li>";
        document.getElementById('fullName').classList.add('inputError');
    }else
    {
        document.getElementById('fullName').classList.remove('inputError');
    }
    if(password=="")
    {
        errors += "<li>Enter Password.</li>";
        document.getElementById('password').classList.add('inputError');
    }else
    {
        document.getElementById('password').classList.remove('inputError');
    }
    if(nationality==0)
    {
        errors += "<li>Select Nationality</li>";
        document.getElementById('nationality').classList.add('inputError');
    }else
    {
        document.getElementById('nationality').classList.remove('inputError');
    }
    if(username=="")
    {
        errors += "<li>Enter Username.</li>";
        document.getElementById('username').classList.add('inputError');
    }else
    {
        document.getElementById('username').classList.remove('inputError');
    }

    if(errors!="")
    {
        document.getElementById('errorList').innerHTML = errors;
        return false;
    }else
    {
        document.getElementById('errorList').innerHTML = "";
        return true;
    }
}

function resetForm()
{
    //alert('reset');
    document.getElementById('errorList').innerHTML = "";
    document.getElementById('fullName').classList.remove('inputError');
    document.getElementById('password').classList.remove('inputError');
    document.getElementById('username').classList.remove('inputError');
    document.getElementById('nationality').classList.remove('inputError');
}