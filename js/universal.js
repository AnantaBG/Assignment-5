// For InputField
function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    // return inputNumber;
    if (inputNumber === Number || inputNumber >= 0) {
        return inputNumber;
    } else {
        alert('Please Enter a Valid Amount')
        return 0;
    }
}
// For TextField
function getTextFieldValueById(id){
const textValue = document.getElementById(id).innerText;
const textNumber = parseFloat(textValue);
return textNumber;
}