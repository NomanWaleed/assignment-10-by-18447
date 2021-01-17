

function validation(){
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var country = document.getElementById("country").value;
    var zipCode = document.getElementById("zipCode").value;
    var email = document.getElementById("email").value;
    var male = document.getElementById("male").value;
    var female = document.getElementById("female").value;
    var eng = document.getElementById("eng").value;
    var nonEng = document.getElementById("nonEng").value;
    var about = document.getElementById("about").value;
    
// User ID
if ((user == "") || (user == null)) {
    document.getElementById("userError").innerHTML = "User ID Can't be Empty";
    return false;
}

if ((user.length <=4) || (user.length >12)) {
    document.getElementById("userError").innerHTML = "User ID Length Must be Between 4 and 12";
    return false;    
}
else
{
    document.getElementById("userError").innerHTML = "<span class='text-success'>G o Rana</span>";
}


// Password
if ((pass == "") || (pass == null)) {
    document.getElementById("passError").innerHTML = "Password Can't be Empty";
    return false;
}

if ((pass.length <=4) || (pass.length >12)) {
    document.getElementById("passError").innerHTML = "Password Length Must be Between 7 and 12";
    return false;    
}
else
{
    document.getElementById("passError").innerHTML = "<span class='text-success'>Password OK</span>";
}

// Name
if ((name == "") || (name == null)) {
    document.getElementById("nameError").innerHTML = "Name Can't be Empty";
    return false;
}

if ((pass.length <=4) || (pass.length >12)) {
    document.getElementById("passError").innerHTML = "Required and Alphabets Only";
    return false;    
}
else
{
    document.getElementById("passError").innerHTML = "<span class='text-success'>Password OK</span>";
}

// Address
if ((address == "") || (address == null)) {
    document.getElementById("addressError").innerHTML = "Address Can't be Empty";
    return false;
}

// Country
if ((country == "") || (country == null)) {
    document.getElementById("countryError").innerHTML = "Country Can't be Empty";
    return false;
}

// Zip COode
if ((zipCode == "") || (zipCode == null)) {
    document.getElementById("zipError").innerHTML = "ZIP Code Can't be Empty";
    return false;
}

// Email
if ((email == "") || (email == null)) {
    document.getElementById("emailError").innerHTML = "Email Can't be Empty";
    return false;
}

// Gender
if ((male == "") || (female == "")) {
    document.getElementById("genderError").innerHTML = "Gender Can't be Empty";
    return false;
}

// Language
if ((eng == "") || (nonEng == "")) {
    document.getElementById("languageError").innerHTML = "Language Can't be Empty";
    return false;
}

// About
if ((about == "") || (about == null)) {
    document.getElementById("aboutError").innerHTML = "About Can't be Empty";
    return false;
}








// if (pass == "") {
//     document.getElementById("passError").innerHTML = "Password Can't be Empty";
//     return false;
// }
// if ((pass.length <7) || (pass.length >12)) {
//     document.getElementById("passError").innerHTML = "Password Length Must be Between 7 and 12";
//     return false;    
// }








    // if(userID = " "){
    //     document.getElementById("userError").innerHTML = "Please Fill the Username Field";
    //     return false;
    // }
    // NaN : Not a Number
//     if(!isNaN(user)){
//         document.getElementById("username").innerHTML = "Username Must Contain Only Characters";
//         return false;
//     }



//     if(pass == ""){
//         document.getElementById("passwords").innerHTML = "Please Fill the Password Field";
//         return false;
//     }
//     if((pass.length <=6) || (pass.length > 12)){
//         document.getElementById("passwords").innerHTML = "Password Length Must be Between 7 and 12";
//         return false;
//     }




//     if(pass != conpass){
//         document.getElementById("confirmPass").innerHTML = "Password Must be Same";
//         return false;

//     }

//     if(conpass == ""){
//         document.getElementById("confirmPass").innerHTML = "Please Fill the Confrim Password Field";
//         return false;
//     }



//     if(mobileNumber == ""){
//         document.getElementById("mobileNo").innerHTML = "Please Fill the Mobile Number Field";
//         return false;
//     }
//     if(isNaN(mobileNumber)){
//         document.getElementById("mobileNo").innerHTML = "Must Write Digits Only";
//         return false;
//     }
//     if(mobileNumber.length != 10){
//         document.getElementById("mobileNo").innerHTML = "Must Write 10 Digit Mobile Number";
//         return false;
//     }



//     if(emails == ""){
//         document.getElementById("emailsIDs").innerHTML = "Please Fill the Email Field";
//         return false;
//     }


//     if(emails.indexOf('@') <= 0 ){
//         document.getElementById("emailsIDs").innerHTML = "** @ invalid Position";
//         return false;
//     }

//     if((emails.charAt(emails.length-4) != '.') && (emails.charAt(emails.length-3))){
//         document.getElementById("emailsIDs").innerHTML = "** . invalid Position";
//         return false;
//     }

}