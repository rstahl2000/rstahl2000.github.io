function validateForm(){
    let isValid=true
    let x = document.forms["contact"]["user_fname"].value;
    if (x == "") {
        alert("First name must be filled out");
        isValid=false
    }
    x=document.forms["contact"]["user_lname"].value;
    if (x == "") {
        alert("Last name must be filled out");
        isValid=false
    }
    x=document.forms["contact"]["user_email"].value;
    if (x.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g)==null) {
        alert("Email must be proper format: XYZ@domain.headdomain");
        isValid=false
    }
    x=document.forms["contact"]["user_phone"].value;
    if (x.match(/^([0-9]{3})-([0-9]{3})-([0-9]{4})$/g)==null) {
        alert("Phone must be proper format: 123-456-7890");
        isValid=false
    }
    x=document.forms["contact"]["user_message"].value;
    if (x == "") {
        alert("A message must be left.");
        isValid=false
    }
}