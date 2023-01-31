// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
if (!max) {
  max = min
  min = 0
}

var random = Math.random() 
return Math.floor(min * (1 - random) + random*max)       

}

function getRandomItem(list) {
  return list[randomInt(list.length)]
}

// Create generatePassword function
function generatePassword() {
  
  while (true) {
    var lengthInput = window.prompt("How many characters would you like your password to be?")
    var passwordLength = parseInt(lengthInput)
    if (isNaN(passwordLength)) {
      window.alert("Please enter a numeric value for password length")
    } else if (passwordLength < 8 || passwordLength > 128) {
      window.alert("Password length must be between 8 and 128 characters")
    } else {
      break
    }
  }
  var wantsUppercase = window.confirm("Would you like your password to include upper case letters? Press 'Ok' for Yes or 'Cancel' for No")
  var wantsLowercase = window.confirm("Would you like your password to include lower case letters?")
  var wantsNumbers = window.confirm("Would you like your password to include numbers?")
  var wantsSpecial = window.confirm("Would you like your password to include special characters?")

  var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q",
                       "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
                        "r", "s", "t", "u", "v", "w", "y", "z"]
  var numbersList = [0, 1, 2, 3, 4, 5, 6, 7, 8 , 9]
  var specialList = ["!", "\"", "#", "$", "%", "&", "`", "(", ")", "*", "+", "'", "-", ".", "/", ":",
                    ";", "<", ">", "=", "?", "@", "[", "]", "{", "}", "^", "_", "'", "|", "~"]

  var userCharReqs = []

  if (wantsUppercase === true) {
    userCharReqs.push(uppercaseList)
  }

  if (wantsLowercase === true) {
    userCharReqs.push(lowercaseList)
  }
  
  if (wantsNumbers === true) {
    userCharReqs.push(numbersList)
  }

  if (wantsSpecial === true) {
    userCharReqs.push(specialList)
  }

  var password = ""

  for (var i = 0; i < passwordLength; i++) {
    var randomCharOptions = getRandomItem(userCharReqs)
    var randomCharFinal = getRandomItem(randomCharOptions)
    password  += randomCharFinal
  }

  return password
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

} 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
