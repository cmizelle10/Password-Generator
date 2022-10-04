// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create generatePassword function
function generatePassword() {
  
  while (true) {
    var userInput = window.prompt("How many characters would you like your password to be?")
    var passwordLength = parseInt(userInput)
    if (isNaN(passwordLength)) {
      window.alert("Please enter a numeric value for password length")
    } else if (passwordLength < 8 || passwordLength > 128) {
      window.alert("Password length must be between 8 and 128 characters")
    } else {
      break
    }
  }

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

} 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
