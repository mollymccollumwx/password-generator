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
function prompts (){

  var upperCaseChoice = confirm("Do you want uppercase letters in your password?");

  var lowerCaseChoice = confirm("Do you want lowercase letters in your password?");

  var numberChoice = confirm("Do you want numbers in your password");

  var specialCharacterChoice = confirm("Do you want special characters in your password");

//adds strings together based on the user choices
    if (upperCaseChoice){
        emptyPassword = emptyPassword + upperCase;
      
    }
    if (lowerCaseChoice){
        emptyPassword = emptyPassword + lowerCase;

    }
    if (numberChoice){
        emptyPassword = emptyPassword + numbers;

    }
    if (specialCharacterChoice){
      emptyPassword = emptyPassword + characters;
    }

  console.log(emptyPassword);

  //if the user doesn't make any choices, they receive an alert message and the function starts over
  if (!upperCaseChoice && !lowerCaseChoice  && !specialCharacterChoice  && !numberChoice){
    alert("You must choose at least one.");
    prompts();
  }
  
}
//function that generates a new password based on user choices
function generatePassword(){

  //prompts user to choose the password length

  
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
