function removedata1() {
    document.getElementById("outputformdata").innerHTML = "(you started over)";
  }
// Today's Date code

       const j = new Date();
       let joutput = j.toLocaleDateString();
       document.getElementById("today").innerHTML =joutput;



// slider code

       let slider = document.getElementById("range");
       let output = document.getElementById("range-scale");
       output.innerHTML = slider.value;
   
       slider.oninput= function(){
           output.innerHTML = this.value;
       }


// validating data DOB

function validateDOB() {
    const dob = document.getElementById("dob");
    const date = new Date(dob.value);
    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() - 120);

    if (date > new Date()) {
        document.getElementById("dob-error").innerHTML = "Date cannot be in the future";
        dob.value = "";
        return false;
    } else if (date < maxDate) {
        document.getElementById("dob-error").innerHTML = "Date cannot be more than 120 years ago";
        return false;
    } else {
        document.getElementById("dob-error").innerHTML = "";
    }
}


/// SSN
function validateSSN() {
    const ssn = document.getElementById("ssn").value;

    // Regular expression for SSN validation
    const ssnRegex = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

    if (!ssnRegex.test(ssn)) {
        document.getElementById("ssn-error").innerHTML = "Invalid SSN format. It should be in the format XXX-XX-XXXX or XXXXXXXXX.";
        return false;
    } else {
        document.getElementById("ssn-error").innerHTML = "";
        return true;
    }
}

// phone and remove non digit 
function validatePhone() {
    const phoneInput = document.getElementById("phone");
    const phone = phoneInput.value.replace(/\D/g,"")
    if(phone.length !== 10) {
        document.getElementById("phone-error").innerHTML = "Invalid Phone Number";
    return false;
}
    const formattedPhone = phone.slice(0,3) + "-" + phone.splice(3,6) + "-" + phone.splice(6);
    phoneInput.value = formattedPhone;
    document.getElementById("phone-error").innterHTML = "";
    return true;
}

//zipcode

function validateZip() { 
    const zipInput = document.getElementById("zip");
    let zip = zipInput.value.replace(/[^\d-]/g,"") // remove all digit 

if(!zip){
    document.getElementById("zip-error").innerHTML = "ZipCode is Required"
    return false;
}

if(zip.length > 5){
    zip = zip.slice(0,5);
    }
}

// User ID

function validateUser() {
    userId = document.getElementById("userid").value;

    // convert lower case for usnername
    userId = userId.toLowerCase();

    document.getElementById("userid").value = userId
}

// can not start with number
if (!isNaN(userId.ChatAt(0))) { 
    document.getElementById("userid-error").innerHTML = "User can not start with a number";
    return false;
}



if(userId.length === 0) {
    document.getElementById("userid-error").innerHTML = "User ID can not be blank";
    return false;
}

// can only have the following characters 
let regex = /^[a-zA-Z0-9!@#%^&*()-_+=\/><.,`~]+$/;

if(!regex.test(userId)) {
    document.getElementById("userid-error").innerHTML = "User Id can only contain Letters, numbers, and Special Characters";
return false;

} else if (userId.length < 8 || userId.length > 30) {
    document.getElementById("userid-error").innerHTML = "User ID must be between 8 and 30 characters.";

return false;
}

// if all checks pass
else {
    document.getElementById("userid-error").innerHTML = "";
    return true;
}


// password 
function validatePWD() {
  const pwd = document.getElementById("pwd").value;
  const user = document.getElementById("userid").value;

    // does not equal password
  let errorFlag = 0;

  // lower case
  if(!pwd.match(/[a-z]/)) {
    document.getElementById("msg1").innerHTML = "Enter atleast one lowercase letter"
    errorFlag = 1;
 }  else{
    document.getElementById("msg1").innerHTML = "";
 }

if (pwd == user || pwd.includes(user)) {
    document.getElementById("msg2").innerHTML = "Password can not equal user ID"
    errorFlag = 1;
} else {
    document.getElementById("msg3").innerHTML = "";

}
if (errorFlag === 0) {
    document.getElementById("msg3").innerHTML = "Valid Password";
}
}
   // Function to simulate getting data
        function getdata1() {
            console.log("Get Data function called");
        }

        // Function to validate
        function validate() {
            console.log("Validate function called");
            // Your validation logic here
        }

        // Attach JavaScript event listeners
        document.getElementById("getDataBtn").addEventListener("click", getdata1);
        document.getElementById("validateBtn").addEventListener("click", validate);

        // Reset button uses type="reset" for default behavior in forms

    JS:document.addEventListener("DOMContentLoaded", () => {
        const form = document.getElementById("last_name");
        const fnameInput = document.getElementById("first_name");
        const greetingDiv = document.getElementById("greeting");
        const rememberCheckbox = document.getElementById("rememberMe");
        const notYouContainer = document.getElementById("not-you-container");
        const submitBtn = document.getElementById("reset");
        const validateBtn = document.getElementById("validate");

        // Helper functions for cookies
        function setCookie(name, value, hours) {
            const expires = new Date(Date.now() + hours * 60 * 60 * 1000).toUTCString();
            document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
        }

        function getCookie(name) {
            const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
            return match ? decodeURIComponent(match[2]) : null;
        }

        function deleteCookie(name) {
            document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        }

        // Handle cookie on load
        const savedName = getCookie("first_name");
        if (savedName) {
            greetingDiv.textContent = `Welcome back, ${savedName}`;
            fnameInput.value = savedName;

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.id = "reset-user";
            const label = document.createElement("label");
            label.htmlFor = "reset-user";
            label.textContent = ` Not ${savedName}? Click here to reset.`;
            notYouContainer.appendChild(checkbox);
            notYouContainer.appendChild(label);

            checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                deleteCookie("first_name");
                form.reset();
                greetingDiv.textContent = "Welcome New User";
                notYouContainer.innerHTML = "";
                fnameInput.value = "";
            }
            });
        }})