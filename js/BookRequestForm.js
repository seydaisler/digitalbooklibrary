const bookrequstform = document.getElementById("bookrequstform")


function buttonclick() {event.preventDefault()
    inputfirstname = document.getElementById("first-name") 
    if(!validatetext(inputfirstname.value)){
        alert("Please enter a valid name")
        return false
    }
    inputlastname = document.getElementById("last-name") 
    if(!validatetext(inputlastname.value)){
        alert("Please enter a valid lastname")
        return false
    }
   
    inputauthorname = document.getElementById("author") 
    if(!validatetext(inputauthorname.value)){
        alert("Please enter a valid author name")
        return false
    }
 
    inputemail = document.getElementById("email") 
    if(!validateemail(inputemail.value)){
        alert("Please enter a valid email")
        return false
    }
    bookrequstform.submit()
}

function validatetext(str){
    let re = /^[a-zA-Z]+$/;
   if (!re.exec(str)) {
   return false
     }
return true
}

function validateemail(email){
    let re = /.+@.+\..+/;
   if (!re.exec(email)) {
   return false
     }
return true
}

bookrequstform.addEventListener('submit', buttonclick);