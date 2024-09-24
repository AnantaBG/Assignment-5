document.getElementById('donate-Now2').addEventListener('click', function(event){
    event.preventDefault();
    const donatedMoney2 = getInputFieldValueById('input-Donation2');
    const balance = getTextFieldValueById('account-balance');
    const donatedBalance2 = getTextFieldValueById('donated-Balance2');
    const donatedNewBalance2 = donatedBalance2 + donatedMoney2 ;
    document.getElementById('donated-Balance2').innerText = donatedNewBalance2;
    const newBalance2 = balance - donatedMoney2;
    document.getElementById('account-balance').innerText = newBalance2;
    const campaignDetails = document.getElementById('donation-campaign2').innerText;
    
    // add to History Section
    const donationHistory = document.createElement('p')
    if (donatedMoney2 > 0) {
            donationHistory.innerText = `Donated: ${donatedMoney2} Tk for ${campaignDetails}.
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
    const myModal = document.getElementById('my_modal_2');
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
        return 0;
        
    }
    

    
}