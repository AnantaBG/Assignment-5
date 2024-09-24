document.getElementById('donate-Now1').addEventListener('click', function(event){
    event.preventDefault();
    const donatedMoney1 = getInputFieldValueById('input-Donation1');
    const balance = getTextFieldValueById('account-balance');
    const donatedBalance1 = getTextFieldValueById('donated-Balance1');
    const donatedNewBalance1 = donatedBalance1 + donatedMoney1 ;
    document.getElementById('donated-Balance1').innerText = donatedNewBalance1;
    const newBalance1 = balance - donatedMoney1;
    document.getElementById('account-balance').innerText = newBalance1;
    const campaignDetails = document.getElementById('donation-campaign1').innerText;

    // add to History Section
    const donationHistory = document.createElement('p')
    if (donatedMoney1 > 0) {
            donationHistory.innerText = `Donated: ${donatedMoney1} Tk for ${campaignDetails}.
            Date: ${new Date()}. `
    }
    document.getElementById('donation-container').appendChild(donationHistory).classList.add('m-3', 'border-2', 'p-2');
    
})
// showModal
// For InputField
function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const balance = document.getElementById('account-balance').innerText;
    const mainBalance = parseFloat(balance);
    const inputNumber = parseFloat(inputValue);
    const myModal = document.getElementById('my_modal_1');
    function showModal(){
    myModal.showModal();
    }
    function closeModal(){
    myModal.close()
    }

    if (inputNumber === Number || inputNumber > 0 || inputNumber < mainBalance) { 
        showModal();
        return inputNumber;
        
        
    } else {
        closeModal();
        alert('Please Enter a Valid Amount')
        return ;
        
    }
    

    
}
