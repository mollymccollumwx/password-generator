// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//declaration of variables
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '0123456789';
var characters = '.,~!@#$%^&*()+={}[]<>?';

//empty variable to put all character possibilities in depending on what the user selects
var emptyPassword = '';

//function that prompts the user to make choices
function userChoices (){

  var upperCaseChoice = confirm("Do you want uppercase letters in your password?");

  var lowerCaseChoice = confirm("Do you want lowercase letters in your password?");

  var numberChoice = confirm("Do you want numbers in your password?");

  var specialCharacterChoice = confirm("Do you want special characters in your password?");

//adds strings together based on the user choices
    if (upperCaseChoice){
        emptyPassword += upperCase;
      
    }
    if (lowerCaseChoice){
        emptyPassword += lowerCase;

    }
    if (numberChoice){
        emptyPassword += numbers;

    }
    if (specialCharacterChoice){
      emptyPassword += characters;
    }

  //if the user doesn't make any choices, they receive an alert message and the function starts over
  if (!upperCaseChoice && !lowerCaseChoice  && !specialCharacterChoice  && !numberChoice){
    alert("You must choose at least one type of character. Try again!");
    userChoices();
  }
  
}
//function that generates a new password based on user choices
function generatePassword(){

  //prompts user to choose the password length
  var passwordLength = prompt("How long do you want your password to be? Please choose a value between 8 and 128.");

  //gives the user an alert message if they pick an incorrect value and the function starts over
  if (passwordLength < 8 || passwordLength > 128){
    alert("Incorrect value. Please choose a number between 8 and 128.");
    generatePassword();
  }
  //calls the prompt function
   userChoices();

  //creates new string variable to put final password in
  var password = '';

  //uses a for loop to create a randomized password based on user selections of length and type of character
  for (var i = 0; i < passwordLength; i++){
    var randomIndex = Math.floor(Math.random() * emptyPassword.length);
    var randomizedCharacter = emptyPassword[randomIndex];
    password += randomizedCharacter;
  }
  //new password
  return password;
  
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
