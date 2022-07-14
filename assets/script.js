// Assignment Code
var generateBtn = document.querySelector("#generate");

var numberChars = "0123456789";
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var specialChars = "/[!@#$%^&*()_+-=\[/]{}";
var allChars = ""


  var confirmLength = function(item) {
    if(item<8){
      passwordLength = window.prompt("Must be greater than 8")
      confirmLength(passwordLength);
    }
    return item
  }




// // Add event listener to generate button
// generateBtn.addEventListener("click", passwordGenerator);


function generatePassword(){
  let password1 = ""
  let passwordLength = window.prompt("Password must be between 8 and 128 Characters")
  confirmLength(passwordLength);
  let lowercase = window.confirm("do you want lowercase?");
    console.log(lowercase);
    if (lowercase){
      allChars +=lowerChars;
    }
  let uppercase = window.confirm("do you want uppercase?");
    console.log(uppercase);
    if (uppercase){
      allChars +=upperChars;
    }
  let numbers = window.confirm("do you want numbers?");
    console.log(numbers);
    if (numbers){
      allChars +=numberChars;
  }
  let specialCharacters = window.confirm("do you want special characters?");
    console.log(specialCharacters);
    if (specialCharacters){
      allChars +=specialChars;
    }
    console.log(allChars)

    for (var i = 0; i <passwordLength; i++ ){
      password1 += allChars[Math.floor(Math.random() *allChars.length)]

    }

    // function getPasswordCharacter() {
    //   return String.fromCharCode(Math.floor(Math.random() * 77) + 34);
    // }

    // function getPasswordCharacter()
    
    // Function returns a string of concatenated characters of length num



  //   function passwordGenerator(num) {
  //     var password = '';
  //     for (var i = 0; i < num; i++) {
  //       password += getPasswordCharacter();
  //     }
  //     return password;
  //   }

    
  //   password1 =passwordGenerator(passwordLength)
  // // }
  // do for loop here ***

  // Use the correct selector `#` to select a button by its ID and not class***
// var passwordBtnEl = $('#generate');
// var passwordDisplayEl = $('#password');

// Function returns a random character that includes alphanumeric and special character values
// function getPasswordCharacter() {
//   return String.fromCharCode(Math.floor(Math.random() * 77) + 34);
// }

// Function returns a string of concatenated characters of length num
// function passwordGenerator(num) {
//   var password = '';
//   for (var i = 0; i < num; i++) {
//     password += getPasswordCharacter();
//   }
//   return password;
// }
// 
//   //add rndm letters to password string
//   return password
// }


// function generatePassword(){
  
  
//   PsuedoCode
//   prompt = length
//     let pwdLength = prompt("how many characters")
//     console.log(pwdLength)
//   confirm - lowercase, uppercase, numeric, special characters
//     let numbers  =  confirm("DO you want numbers");
//       console.log(numbers);
//   create var to hold anser to prompt/confirm 
//   function to validate user answrs
//   if and equalaity operators 
//    if(numbers){

//    } 

//   List of numbers, special chars, uppercase and lowercase
//     array
//     combine all arrays in 1 array
//     Randomly choose characters
//     create a string set equal to password var
//     array method to check if something is in array
//   generate random password
//   return password

  return password1;
}
  
// Add event listener to generate button





// function passwordGen(num) {
//   var password = '';
//   for (var i = 0; i < num; i++) {
//     password += getPasswordCharacter();
//   }
//   return password;
// }

// Add event listener to generate button
// generateBtn.addEventListener("click", passwordGenerator);




// Change the event listener to `click` to make the event trigger on single-click
// passwordBtn.on('click', function () {
//   var newPassword = passwordGenerator();
//   passwordText.text(newPassword);
// });