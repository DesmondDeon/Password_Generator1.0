// Modal Functions

// Get references to the #generate / Modal button element
var generateBtn = document.querySelector("#generate");

// Get Modal Button Elements
var modal = document.getElementById("questionmodal");
var closebtn = document.getElementsByClassName("closebtn")[0];

// Add event listener to Open Questions Modal button
generateBtn.addEventListener("click", openModal);

// Function to Open Modal
function openModal(){
  modal.style.display = 'block';
}

function clickOutside(e){
  if(e.target == modal){
  modal.style.display = 'none';
  }
}  


// Password Questions and Results 


// Assignment code here

const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const sybomlsEl = document.getElementById('symbols');
const generateEl = document.getElementById('get__password');

const randomFunc = {
  lower: getRandomLower(),
  upper: getRandomUpper(),
  numbers: getRandomNumber(),
  symbols: getRandomSymbol()

};
// Event Generation 
generateEl.addEventListener("click", () => {
  const length = +lengthEl.value;
  const haslower = lowercaseEl.checked;
  const hasupper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = sybomlsEl.checked;

  resultEl.innerText = generatepassword(
    haslower, 
    hasupper,
    hasNumber, 
    hasSymbol,
    length);

    document.getElementById("password").textContent = resultEl.innerText
    closeModal()
})

  // Genrate Password Fuction
function generatepassword(lower, upper, numbers, symbols, length) {
  
  let password = '';

  const typesCount = lower + upper + numbers + symbols;

  const typesArr = [{ lower }, { upper }, { numbers }, { symbols }].filter
  (
    item => Object.values(item)[0]
    );

  console.log('typesArr:', typesArr)

  if (typesCount === 0) {
    return '';
  }

  for (let index = 0; index < length; index+=typesCount) {
    typesArr.forEach(type =>{
      var funcName = Object.keys(type)[0];
      console.log('randomFunc: ', funcName);

      password += randomFunc[funcName];
    })
    
    

  }

  const finalPassword = password.slice(0, length);
  console.log("finalPassword:", finalPassword)

  return finalPassword;
}

// Function

// Generator Functions Refrence: https://net-comber.com/charset.html
function getRandomLower(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol(){
  let Symbols = '!@#$%^&[]*/,.=';
  return Symbols[Math.floor(Math.random() * Symbols.length)];
}

 










//console.log(getRandomSymbol());



  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

//}






//generateBtn.addEventListener("click", writePassword);


// Function to Close Modal
// Add Event Listener to Close Question Modal button
closebtn.addEventListener("click", closeModal);
window.addEventListener("click", clickOutside);

function closeModal(){
  modal.style.display = 'none';
}
