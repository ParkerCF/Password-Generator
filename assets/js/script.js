// Function for user prompts - password criteria 
function getPasswordOptions() {
  // length of password 
  var length = parseInt(
    prompt('How long would you like your password?'),
    10
  );

  // check if length is number, else false
  if (Number.isNaN(length)) {
    alert('Password length must be a number');
    return null;
  }

  // check if password is 8 characters long, else false
  if (length < 8) {
    alert('Password length must be at least 8 characters');
    return null;
  }

  // check if password is less than 128 characters, else false
  if (length > 128) {
    alert('Password length must less than 129 characters');
    return null;
  }

  // check if special characters are included, else false 
  var hasSpecialCharacters = confirm(
    'Click OK to confirm including special characters.'
  );

  // check if numbers are included, else false
  var hasNumericCharacters = confirm(
    'Click OK to confirm including numeric characters.'
  );

  // check if lowercase included, else false
  var hasLowerCasedCharacters = confirm(
    'Click OK to confirm including lowercase characters.'
  );

  // check if uppercase is included, else false 
  var hasUpperCasedCharacters = confirm(
    'Click OK to confirm including uppercase characters.'
  );

  // Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
  if (
    hasSpecialCharacters === false &&
    hasNumericCharacters === false &&
    hasLowerCasedCharacters === false &&
    hasUpperCasedCharacters === false
  ) {
    alert('Password must contain character type');
    return null;
  }

  // user input
  var passwordOptions = {
    length: length,
    hasSpecialCharacter: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCharacters: hasLowerCasedCharacters,
    hasUpperCasedCharacters: hasUpperCasedCharacters,
  };

  return passwordOptions;
}


// function for getting random characters 
const randomFunction = {
  lower: getRandonmLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
}

function generatePassword(lower, upper, number, symbol, length) {
  var options = getPasswordOptions()
	let generatedPassword = '';
	const typesCount = lower + upper + number + symbol;
	const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
	
	// create a loop
	for(let i=0; i<options.length; i+=typesCount) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}
	
	const finalPassword = generatedPassword.slice(0, length);
	
	return finalPassword;
}


// Function for generating random letters, numbers, and sepcial characters/symbols

const getCharacter = [
function getRandonmLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
},

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
},

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
},

function getRandomSymbol() {
  var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.',
  ]
]
  
  return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
