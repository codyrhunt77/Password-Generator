var generateBtn = document.querySelector("#generate");
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z" ];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var number = ["1","2","3","4","5","6","7","8","9"];
var symbol = ["!","@", "#","$","%","^","&","*","_","-","+","=","?","<",">","~","/","|",".", ","];
var passArr = [];
var length = 8;
function writePassword() {
  prompts();
  if (prompts) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  }
}
function generatePassword() {
 let password = "";
  for(var i = 0; i < length; i++){
    var index = Math.floor(Math.random() * passArr.length);
    password = password + passArr[index];
  }
  return password;
}
function prompts(){
  passArr = [];
  length = parseInt(prompt("How long would you like your password? (Must be between 8-128.)"));
  if(isNaN(length) || length < 8 || length> 128) {
    alert("Must be in number form and between 8-128!");
    return false;
  }
  if (confirm("Would you like lowercase characters?")) {
  passArr = passArr.concat(lowerCase);
 } 
  if (confirm("Would you like uppercase characters?")) {
    passArr = passArr.concat(upperCase);
  }
  if (confirm("Would you like numbers?")) {
    passArr = passArr.concat(number);
  }
  if (confirm("Would you like symbols?")) {
    passArr = passArr.concat(symbol);
  }
  return true;
}
generateBtn.addEventListener("click", writePassword);

