// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength;
var confirmUpperCase;
var confirmLowerCase;
var confirmNumber;
var confirmSpecial;

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "#", "%", "&", ">", "<", "/", "-", "_", "=", "+"];


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  var passwordLength = prompt("Password must be between 8 and 128 characters");

if(!passwordLength){
  alert("required value")

} else if(passwordLength < 8 || passwordLength >128){
  passwordLength = prompt("Password must be more than 8 or less than 128 characters");

} else { 
  confirmLowerCase = confirm("Click 'Ok' if you want your password to contain lowercase numbers");
  confirmUpperCase = confirm("Click 'Ok' if you want your password to have upper case letters");
  confirmNumber = confirm("Click 'Ok' if you want your password to contain numbers");
  confirmSpecial = confirm("Click 'Ok' if you want your password to contain special characters");
}

var passwordCharacters = []

if(confirmUpperCase){
  passwordCharacters = passwordCharacters.concat(upperCase)
}

if(confirmLowerCase){
  passwordCharacters = passwordCharacters.concat(lowerCase)
}

if(confirmNumber){
  passwordCharacters = passwordCharacters.concat(numbers)
}

if(confirmSpecial){
  passwordCharacters = passwordCharacters.concat(special)

}

var autoPassword = []

for(var i = 0; i < passwordLength; i++){
  var autoPassword = autoPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
}
  
}
