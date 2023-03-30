// // GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


// Get references to the #generate element

const generateBtn = document.querySelector("#generate");
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const special = ['/', '%', '$', '#', '@', '^', '*', '(', ')'];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function generatePassword() {
  function lengthinput() {
    var passLengthResult = prompt("Length? Between 8-128 Characters");
    console.log(passLengthResult);
    if (passLengthResult < 8 || passLengthResult > 128) {
      alert("Please chose a number between 8-128");
      return lengthinput();
    }
    else if (!passLengthResult < 8 || !passLengthResult > 128) {
      alert("You chose " + passLengthResult)
      console.log(passLengthResult);
      return passLengthResult;
    }
  }  

  function checkCriteria() {
    var tub = [];
    var passwordCriteriaC = confirm("Include lowercase?");
    var passwordCriteriaU = confirm("Include uppercase?");
    var passwordCriteriaS = confirm("Include special characters?");
    var passwordCriteriaN = confirm("Include numbers");
    if (!passwordCriteriaU && !passwordCriteriaS && !passwordCriteriaN && !passwordCriteriaC) {
      alert("Please select at least one option")
      return checkCriteria();
    }
    else {
    if (passwordCriteriaC) {
      tub.push(lowercase)
    }
    if (passwordCriteriaU) {
      tub.push(uppercase)
    }
    if (passwordCriteriaS) {
      tub.push(special)
    }
    if (passwordCriteriaN) {
      tub.push(numbers)
    }
    return tub;
    }
  }

  function genPassword(length, tub) {
    var password = "";
    for (let i = 0; i < length;i++){
      var random1 = Math.floor(Math.random() * tub.length)
      var random2 = Math.floor(Math.random() * tub[random1].length)
      var newCharacter = tub[random1][random2]
      console.log(newCharacter);
      password+= newCharacter;
    }
    return password;
  }

  var password = genPassword (lengthinput(),checkCriteria())

return password;
}

  // Write password to the #password input

  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    console.log(password)
  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
