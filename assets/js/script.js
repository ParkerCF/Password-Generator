// setting all variables needed for password criteria
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var symbol = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~";


var upperCaseArr = upperCase.split("");
var lowerCaseArr = lowerCase.split("");
var numberArr = number.split("");
var symbolArr = symbol.split("");
 
function generatePassword() {
	var finalPass = "";
  var totalCharacters = [];    
  
// Password generation and prompts
  var passLength = prompt("How long would you like your password to be?");  
  if(passLength <8 || passLength >128){
    //check if password meets length criteria
    alert("Password must be greater than 8 characters and less than 128 characters");
  }

  else {
    //ask for including uppercase 
    if(confirm("Would you like to include uppercase letters?")){
      Array.prototype.push.apply(totalCharacters, upperCaseArr);
    }
    //ask for including lowercase
    if(confirm("Would you like to include lowercase letters?")){
      Array.prototype.push.apply(totalCharacters, lowerCaseArr);
    }
    //ask for including numbers 
    if(confirm("Would you like to include numbers?")){
      Array.prototype.push.apply(totalCharacters, numberArr);
    }
    //ask for including special characters/symbols
    if(confirm("Would you like to include special characters?")){
      Array.prototype.push.apply(totalCharacters, symbolArr);
    }
    //alert for not choosing anything, therefore no password
    if(totalCharacters.length === 0){
      alert("Password must contain minimum 1 type of character");
    
    return null;
    }
    //run script for random character within the requested length
    else {
      for(var i=0; i<passLength; i++) {
          var random = Math.floor(Math.random()*totalCharacters.length);
          finalPass += totalCharacters[random];
      }    
    	return finalPass;
    }
  } 
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write Password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);  