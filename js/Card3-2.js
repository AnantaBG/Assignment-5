document.getElementById('donate-Now3').addEventListener('click', function(event){
    event.preventDefault();
    const donatedMoney3 = getInputFieldValueById('input-Donation3');
    const balance = getTextFieldValueById('account-balance');
    const donatedBalance3 = getTextFieldValueById('donated-Balance3');
    const donatedNewBalance3 = donatedBalance3 + donatedMoney3 ;
    document.getElementById('donated-Balance3').innerText = donatedNewBalance3;
    const newBalance3 = balance - donatedMoney3;
    document.getElementById('account-balance').innerText = newBalance3;
    
    // add to History Section
    const donationHistory = document.createElement('p')
    if (donatedMoney3 > 0) {
            donationHistory.innerText = `Donated: ${donatedMoney3} Tk for Quota flood. Remaining Balance: ${newBalance3} 
            at ${new Date()}. `
    }
    document.getElementById('donation-container').appendChild(donationHistory).classList.add('p-3');   
})
// showModal
// For InputField
function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const balance = document.getElementById('account-balance').innerText;
    const mainBalance = parseFloat(balance);
    const inputNumber = parseFloat(inputValue);
    const myModal = document.getElementById('my_modal_3');
    function showModal(){
    myModal.showModal();
    }
    function closeModal(){
    myModal.close()
    }

    if (inputNumber === Number || inputNumber > 0 && inputNumber < mainBalance) { 
        showModal();
        return inputNumber;
        
        
    } else {
        closeModal();
        alert('Please Enter a Valid Amount')
        return 0;
        
    }
    

    
}