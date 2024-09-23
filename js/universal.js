// For InputField
function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);

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
// Show Section
function showSectionByID(id){
    document.getElementById('donation').classList.add('hidden')
    document.getElementById('history').classList.add('hidden')
    document.getElementById(id).classList.remove('hidden')
}
