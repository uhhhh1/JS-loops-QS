let outputDiv = document.getElementById("output");
let passwordInput = document.getElementById("passwordInput");
let submitButton = document.getElementById("submit-button");

const correctPassword = "skibuddy";
outputDiv.innerHTML += "<h2>Using a password prompt</h2>";

submitButton.addEventListener("click", () =>{
    let password;
    let attempt = 0;

    do{
        password = passwordInput.value;

        if(password === correctPassword){
            outputDiv.innerHTML += "Access granted! <br>"
            passwordInput.disabled = true;
            submitButton.disabled = true;
            break;
        }else{
            outputDiv.innerHTML += ''
        }
    }
});