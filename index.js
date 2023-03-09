const kelvin = 293;
let result = document.getElementById("final");
let resultC;

function c(){
    resultC = kelvin - 273;
    result.textContent = `The celsius conversion is : ${resultC}`
}
function f(){
    let Fahrenhit = (kelvin - 273) * 9/5 + 32
    result.textContent = `The fahrenhit conversion is : ${Math.floor(Fahrenhit)}`
}
function n(){
    let Newton = (kelvin -273) *33/100
    result.textContent = `The newton conversion is: ${Math.floor(Newton)}`
}