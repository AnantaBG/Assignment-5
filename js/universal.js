
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
